import type { ContactFormData } from '@/lib/interfaces/contact.interface';

import { getContactEmailContent } from '@/lib/utils/getEmailContent';
import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
	throw new Error('Invalid/Missing environment variable: "RESEND_API_KEY"');
}

if (!process.env.CONTACT_EMAIL) {
	throw new Error('Invalid/Missing environment variable: "CONTACT_EMAIL"');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export class EmailServiceError extends Error {
	constructor(
		message: string,
		public code: string,
		public statusCode: number = 500,
	) {
		super(message);
		this.name = 'EmailServiceError';
	}
}

export class RateLimitError extends EmailServiceError {
	constructor() {
		super('Email rate limit exceeded. Please try again later.', 'RATE_LIMIT_EXCEEDED', 429);
	}
}

const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

interface EmailData {
	from: string;
	to: string[];
	subject: string;
	html: string;
	replyTo: string;
	tags?: Array<{ name: string; value: string }>;
}

const sendEmailWithRetry = async (emailData: EmailData, maxRetries: number = 3): Promise<void> => {
	let lastError: Error | null = null;

	for (let attempt = 1; attempt <= maxRetries; attempt++) {
		try {
			const result = await resend.emails.send(emailData);

			if (result.error) {
				throw new Error(`Resend API error: ${result.error.message}`);
			}

			console.log(`Email sent successfully on attempt ${attempt}. ID: ${result.data?.id}`);
			return;
		} catch (error) {
			lastError = error as Error;
			console.warn(`Email sending attempt ${attempt} failed:`, error);

			if (error instanceof Error) {
				const errorMessage = error.message.toLowerCase();

				if (errorMessage.includes('rate limit') || errorMessage.includes('429')) {
					if (attempt === maxRetries) {
						throw new RateLimitError();
					}

					await sleep(2000 * attempt);
					continue;
				}

				if (errorMessage.includes('unauthorized') || errorMessage.includes('401')) {
					throw new EmailServiceError('Email service authentication failed', 'AUTH_ERROR', 401);
				}

				if (errorMessage.includes('invalid') && errorMessage.includes('email')) {
					throw new EmailServiceError('Invalid email format provided', 'INVALID_EMAIL', 400);
				}
			}

			if (attempt < maxRetries) {
				await sleep(1000 * attempt);
			}
		}
	}

	throw new EmailServiceError(
		`Failed to send email after ${maxRetries} attempts: ${lastError?.message || 'Unknown error'}`,
		'SEND_FAILED',
		500,
	);
};

const validateEmailData = (formData: ContactFormData): void => {
	const { name, email, message } = formData;

	if (!name?.trim()) {
		throw new EmailServiceError('Name is required for email', 'MISSING_NAME', 400);
	}

	if (!email?.trim()) {
		throw new EmailServiceError('Email is required for email', 'MISSING_EMAIL', 400);
	}

	if (!message?.trim()) {
		throw new EmailServiceError('Message is required for email', 'MISSING_MESSAGE', 400);
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email.trim())) {
		throw new EmailServiceError('Invalid email format', 'INVALID_EMAIL_FORMAT', 400);
	}
};

export const sendContactEmail = async (formData: ContactFormData): Promise<{ success: boolean; timestamp: Date }> => {
	try {
		validateEmailData(formData);

		const { name, email, company, interest, message, submittedAt } = formData;

		const emailContent = getContactEmailContent(
			name.trim(),
			email.trim(),
			company?.trim() ?? 'N/A',
			interest?.trim() ?? 'N/A',
			message.trim(),
			submittedAt,
		);

		const emailData = {
			from: 'Information Request <noreply@goastrobit.com>',
			to: [process.env.CONTACT_EMAIL!],
			subject: `New inquiry from ${name.trim()} - Astrobit Contact Form`,
			html: emailContent,
			replyTo: email.trim(),
			tags: [
				{ name: 'source', value: 'contact-form' },
				{ name: 'environment', value: process.env.NODE_ENV || 'development' },
			],
		};

		await sendEmailWithRetry(emailData);

		console.log(`Contact email sent successfully for: ${email}`);

		return {
			success: true,
			timestamp: new Date(),
		};
	} catch (error) {
		console.error('Failed to send contact email:', {
			error: error instanceof Error ? error.message : 'Unknown error',
			email: formData.email,
			name: formData.name,
			timestamp: new Date().toISOString(),
		});

		if (error instanceof EmailServiceError) {
			throw error;
		}

		throw new EmailServiceError('An unexpected error occurred while sending email', 'UNKNOWN_ERROR', 500);
	}
};
