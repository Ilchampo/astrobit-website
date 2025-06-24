'use client';

import { SEO_CONFIG } from '@/lib/constants/seo';
import { SERVICES } from '@/lib/constants/services';
import {
	generateBreadcrumbStructuredData,
	generateMetadata as generateSEOMetadata,
	generateServiceStructuredData,
} from '@/lib/utils/seo';
import { notFound } from 'next/navigation';

import ServiceContent from './components/ServiceContent/ServiceContent';

interface ServicePageProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps) {
	const { slug } = await params;
	const service = SERVICES.find(s => s.slug === slug);

	if (!service) {
		return generateSEOMetadata({
			title: 'Service Not Found | Astrobit',
			description: 'The requested service could not be found.',
		});
	}

	return generateSEOMetadata({
		title: `${service.title} - Professional Development Services | Astrobit`,
		description: service.description,
		keywords: [
			service.title.toLowerCase(),
			'web development',
			'digital solutions',
			'custom development',
			'professional services',
			'Astrobit',
		],
		url: `${SEO_CONFIG.siteUrl}/services/${service.slug}`,
		image: `${SEO_CONFIG.siteUrl}/images/services/${service.slug}.png`,
	});
}

export async function generateStaticParams() {
	return SERVICES.map(service => ({
		slug: service.slug,
	}));
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function ServicePage({ params }: ServicePageProps) {
	const { slug } = await params;
	const service = SERVICES.find(s => s.slug === slug);

	if (!service) {
		notFound();
	}

	const serviceStructuredData = generateServiceStructuredData({
		name: service.title,
		description: service.description,
		url: `${SEO_CONFIG.siteUrl}/services/${service.slug}`,
		image: `${SEO_CONFIG.siteUrl}/images/services/${service.slug}.png`,
	});

	const breadcrumbStructuredData = generateBreadcrumbStructuredData([
		{ name: 'Home', url: SEO_CONFIG.siteUrl },
		{ name: 'Services', url: `${SEO_CONFIG.siteUrl}/services` },
		{ name: service.title, url: `${SEO_CONFIG.siteUrl}/services/${service.slug}` },
	]);

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceStructuredData }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbStructuredData }} />
			<ServiceContent service={service} />
		</>
	);
}
