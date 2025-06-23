import type { ContactFormData } from '@/lib/interfaces/contact.interface';

import { MongoNetworkError, MongoServerError } from 'mongodb';

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

export class DatabaseConnectionError extends ContactServiceError {
	constructor(originalError: string) {
		super('Database connection failed. Please try again later.', 'DB_CONNECTION_ERROR', 503);
		this.cause = originalError;
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

		// Handle specific MongoDB connection errors
		if (error instanceof Error) {
			const errorMessage = error.message.toLowerCase();

			// SSL/TLS errors
			if (errorMessage.includes('ssl') || errorMessage.includes('tls') || errorMessage.includes('certificate')) {
				console.error('MongoDB SSL/TLS error during duplicate check:', error.message);
				// Don't throw - allow submission to continue
				return;
			}

			// Network/connection errors
			if (
				errorMessage.includes('network') ||
				errorMessage.includes('connection') ||
				errorMessage.includes('timeout')
			) {
				console.error('MongoDB network error during duplicate check:', error.message);
				// Don't throw - allow submission to continue
				return;
			}
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
		// Handle MongoDB specific errors
		if (error instanceof MongoServerError || error instanceof MongoNetworkError) {
			console.error('MongoDB error:', error);

			// Check for specific SSL/TLS errors
			if (
				error.message.includes('SSL') ||
				error.message.includes('TLS') ||
				error.message.includes('certificate')
			) {
				throw new DatabaseConnectionError(
					'SSL/TLS connection error. Please check your database configuration.',
				);
			}

			// Check for network errors
			if (
				error.message.includes('network') ||
				error.message.includes('timeout') ||
				error.message.includes('connection')
			) {
				throw new DatabaseConnectionError('Network connection error. Please try again.');
			}

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

		if (error instanceof MongoServerError || error instanceof MongoNetworkError) {
			console.error('MongoDB error in getContactFormByEmail:', error);

			if (error.message.includes('SSL') || error.message.includes('TLS')) {
				throw new DatabaseConnectionError('SSL/TLS connection error');
			}

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
