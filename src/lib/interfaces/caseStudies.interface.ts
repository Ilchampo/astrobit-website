import type { LucideIcon } from 'lucide-react';

export interface CaseStudyCard {
	icon: LucideIcon;
	title: string;
	description: string;
	featured: boolean;
	path: string;
	image?: string;
}

export interface CaseStudyDetail {
	slug: string;
	image: string;
	title: string;
	subtitle: string;
	description: string;
	path: string;
}

export interface CaseStudyServices {
	icon: LucideIcon;
	title: string;
}

export interface CaseStudy {
	slug: string;
	image: string;
	title: string;
	subtitle: string;
	about: string;
	challenge: string;
	solution: string;
	results: string[];
	services: CaseStudyServices[];
}
