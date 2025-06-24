import { SEO_CONFIG } from '@/lib/constants/seo';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/api/', '/admin/', '/_next/', '/images/temp/'],
		},
		sitemap: `${SEO_CONFIG.siteUrl}/sitemap.xml`,
	};
}
