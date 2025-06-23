import type { ContactFormData, ContactFormResponse } from '@/lib/interfaces/contact.interface';

import { NextRequest, NextResponse } from 'next/server';

import {
	ContactServiceError,
	DuplicateContactError,
	saveContactForm,
	ValidationError,
} from '@/server/services/contact.service';
import { EmailServiceError, RateLimitError, sendContactEmail } from '@/server/services/mailing.service';

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		const { name, email, company, interest, message } = body;

		const forwarded = request.headers.get('x-forwarded-for');
		const ip = forwarded ? forwarded.split(',')[0] : (request.headers.get('x-real-ip') ?? 'unknown');
		const userAgent = request.headers.get('user-agent') || 'unknown';

		const contactData: ContactFormData = {
			name,
			email,
			company,
			interest,
			message,
			submittedAt: new Date(),
			ipAddress: ip,
			userAgent: userAgent,
		};

		let saveResult;

		try {
			saveResult = await saveContactForm(contactData);
			console.log(`Contact form saved with ID: ${saveResult.id}`);
		} catch (error) {
			if (error instanceof ValidationError) {
				return NextResponse.json(
					{
						success: false,
						message: error.message,
					} as ContactFormResponse,
					{ status: error.statusCode },
				);
			}

			if (error instanceof DuplicateContactError) {
				return NextResponse.json(
					{
						success: false,
						message:
							'You have recently submitted a contact form. Please wait 24 hours before submitting again.',
					} as ContactFormResponse,
					{ status: error.statusCode },
				);
			}

			if (error instanceof ContactServiceError) {
				console.error('Contact service error:', error.message);
				return NextResponse.json(
					{
						success: false,
						message: 'Failed to save your message. Please try again.',
						error: process.env.NODE_ENV === 'development' ? error.message : undefined,
					} as ContactFormResponse,
					{ status: error.statusCode },
				);
			}

			console.error('Unexpected error saving contact form:', error);

			return NextResponse.json(
				{
					success: false,
					message: 'Something went wrong while saving your message. Please try again.',
					error: process.env.NODE_ENV === 'development' ? String(error) : undefined,
				} as ContactFormResponse,
				{ status: 500 },
			);
		}

		let emailResult;

		try {
			emailResult = await sendContactEmail(contactData);
			console.log(`Email sent successfully at: ${emailResult.timestamp}`);
		} catch (error) {
			if (error instanceof RateLimitError) {
				console.warn('Email rate limit exceeded for contact form');
			} else if (error instanceof EmailServiceError) {
				console.error('Email service error:', error.message);
			} else {
				console.error('Unexpected email error:', error);
			}
		}

		return NextResponse.json(
			{
				success: true,
				message: 'Thank you for your message! We will get back to you soon.',
			} as ContactFormResponse,
			{ status: 200 },
		);
	} catch (error) {
		console.error('Unexpected error in contact API:', error);

		return NextResponse.json(
			{
				success: false,
				message: 'An unexpected error occurred. Please try again later.',
				error: process.env.NODE_ENV === 'development' ? String(error) : undefined,
			} as ContactFormResponse,
			{ status: 500 },
		);
	}
}

export async function GET() {
	return NextResponse.json(
		{
			success: false,
			message: 'Method not allowed. Use POST to submit contact form.',
		} as ContactFormResponse,
		{ status: 405 },
	);
}

export async function HEAD() {
	return new NextResponse(null, { status: 200 });
}
