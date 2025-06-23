export interface ContactFormData {
	name: string;
	email: string;
	company?: string;
	interest?: string;
	message: string;
	submittedAt: Date;
	ipAddress?: string;
	userAgent?: string;
}

export interface ContactFormResponse {
	success: boolean;
	message: string;
	error?: string;
}
