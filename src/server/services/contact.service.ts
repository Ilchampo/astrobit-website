import type { ContactFormData } from '@/lib/interfaces/contact.interface';

import { MongoServerError } from 'mongodb';

import clientPromise from '@/server/database/mongodb';

export class ContactServiceError extends Error {
	constructor(
		message: string,
		public code: string,
		public statusCode: number = 500,
	) {
		super(message);
		this.name = 'ContactServiceError';
	}
}

export class DuplicateContactError extends ContactServiceError {
	constructor(email: string) {
		super(`Contact with email ${email} already exists within the last 24 hours`, 'DUPLICATE_CONTACT', 409);
	}
}

export class ValidationError extends ContactServiceError {
	constructor(message: string) {
		super(message, 'VALIDATION_ERROR', 400);
	}
}

const validateContactData = (formData: ContactFormData): void => {
	const { name, email, message } = formData;

	if (!name?.trim()) {
		throw new ValidationError('Name is required and cannot be empty');
	}

	if (!email?.trim()) {
		throw new ValidationError('Email is required and cannot be empty');
	}

	if (!message?.trim()) {
		throw new ValidationError('Message is required and cannot be empty');
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email.trim())) {
		throw new ValidationError('Please provide a valid email address');
	}

	if (name.trim().length > 100) {
		throw new ValidationError('Name must be less than 100 characters');
	}

	if (email.trim().length > 254) {
		throw new ValidationError('Email must be less than 254 characters');
	}

	if (message.trim().length > 5000) {
		throw new ValidationError('Message must be less than 5000 characters');
	}

	if (formData.company && formData.company.trim().length > 100) {
		throw new ValidationError('Company name must be less than 100 characters');
	}
};

const sanitizeContactData = (formData: ContactFormData): ContactFormData => {
	return {
		...formData,
		name: formData.name.trim(),
		email: formData.email.trim().toLowerCase(),
		company: formData.company?.trim() ?? undefined,
		interest: formData.interest?.trim() ?? undefined,
		message: formData.message.trim(),
	};
};

const checkForDuplicateSubmission = async (email: string): Promise<void> => {
	try {
		const client = await clientPromise;
		const db = client.db('astrobit');
		const collection = db.collection('contacts');

		const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

		const recentSubmission = await collection.findOne({
			email: email.toLowerCase(),
			submittedAt: { $gte: twentyFourHoursAgo },
		});

		if (recentSubmission) {
			throw new DuplicateContactError(email);
		}
	} catch (error) {
		if (error instanceof DuplicateContactError) {
			throw error;
		}
		console.error('Error checking for duplicate submissions:', error);
	}
};

export const saveContactForm = async (formData: ContactFormData): Promise<{ id: string; timestamp: Date }> => {
	try {
		validateContactData(formData);

		const sanitizedData = sanitizeContactData(formData);

		await checkForDuplicateSubmission(sanitizedData.email);

		const client = await clientPromise;
		const db = client.db('astrobit');
		const collection = db.collection('contacts');

		const dataToSave = {
			...sanitizedData,
			submittedAt: new Date(),
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		const result = await collection.insertOne(dataToSave);

		if (!result.insertedId) {
			throw new ContactServiceError('Failed to save contact form data', 'INSERT_FAILED', 500);
		}

		console.log(`Contact form saved successfully: ${result.insertedId} for email: ${sanitizedData.email}`);

		return {
			id: result.insertedId.toString(),
			timestamp: dataToSave.submittedAt,
		};
	} catch (error) {
		if (error instanceof MongoServerError) {
			console.error('MongoDB error:', error);
			throw new ContactServiceError('Database operation failed', 'DB_ERROR', 500);
		}

		if (error instanceof ContactServiceError) {
			throw error;
		}

		console.error('Unexpected error in saveContactForm:', error);
		throw new ContactServiceError('An unexpected error occurred while saving contact form', 'UNKNOWN_ERROR', 500);
	}
};

export const getContactFormByEmail = async (email: string): Promise<ContactFormData | null> => {
	try {
		if (!email?.trim()) {
			throw new ValidationError('Email is required to search for contact form');
		}

		const client = await clientPromise;
		const db = client.db('astrobit');
		const collection = db.collection('contacts');

		const form = await collection.findOne(
			{ email: email.trim().toLowerCase() },
			{
				sort: { submittedAt: -1 },
				projection: {
					_id: 1,
					name: 1,
					email: 1,
					company: 1,
					interest: 1,
					message: 1,
					submittedAt: 1,
					ipAddress: 1,
					userAgent: 1,
				},
			},
		);

		return form as ContactFormData | null;
	} catch (error) {
		if (error instanceof ValidationError) {
			throw error;
		}

		if (error instanceof MongoServerError) {
			console.error('MongoDB error in getContactFormByEmail:', error);
			throw new ContactServiceError('Database query failed', 'DB_QUERY_ERROR', 500);
		}

		console.error('Unexpected error in getContactFormByEmail:', error);
		throw new ContactServiceError(
			'An unexpected error occurred while retrieving contact form',
			'UNKNOWN_ERROR',
			500,
		);
	}
};
