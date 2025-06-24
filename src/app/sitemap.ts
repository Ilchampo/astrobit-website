import { CASE_STUDIES_DETAILS } from '@/lib/constants/caseStudies';
import { SEO_CONFIG } from '@/lib/constants/seo';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = SEO_CONFIG.siteUrl;
	const currentDate = new Date();

	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: 'daily',
			priority: 1,
		},
		{
			url: `${baseUrl}/services`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/case-studies`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.8,
		},
	];

	const caseStudyRoutes: MetadataRoute.Sitemap = CASE_STUDIES_DETAILS.map(study => ({
		url: `${baseUrl}/case-studies/${study.slug}`,
		lastModified: currentDate,
		changeFrequency: 'monthly' as const,
		priority: 0.6,
	}));

	return [...staticRoutes, ...caseStudyRoutes];
}
