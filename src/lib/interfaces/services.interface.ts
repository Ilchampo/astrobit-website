import type { ProcessStep } from '@/lib/interfaces/process.interface';

type ServiceCardAction = {
	label: string;
	path: string;
};

export interface ServiceCard {
	icon: string;
	title: string;
	description: string;
	action: ServiceCardAction;
	highlight?: string;
}

export interface ServiceBenefit {
	icon: string;
	title: string;
	description: string;
}

export interface Service {
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	benefits: ServiceBenefit[];
	steps: ProcessStep[];
	caseStudiesIds?: string[];
}
