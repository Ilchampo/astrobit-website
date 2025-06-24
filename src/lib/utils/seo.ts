import type { Metadata } from 'next';

import { PAGE_METADATA, SEO_CONFIG, STRUCTURED_DATA } from '@/lib/constants/seo';

interface SEOMetadataProps {
	title?: string;
	description?: string;
	keywords?: string[];
	image?: string;
	url?: string;
	type?: 'website' | 'article';
	publishedTime?: string;
	modifiedTime?: string;
	author?: string;
	section?: string;
}

export const generateMetadata = (props: SEOMetadataProps = {}): Metadata => {
	const {
		title = PAGE_METADATA.home.title,
		description = PAGE_METADATA.home.description,
		keywords = PAGE_METADATA.home.keywords,
		image = `${SEO_CONFIG.siteUrl}/images/og-image.png`,
		url = SEO_CONFIG.siteUrl,
		type = 'website',
		publishedTime,
		modifiedTime,
		author = SEO_CONFIG.author,
		section,
	} = props;

	return {
		title,
		description,
		keywords: keywords.join(', '),
		authors: [{ name: author }],
		creator: SEO_CONFIG.companyName,
		publisher: SEO_CONFIG.companyName,
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
		openGraph: {
			type,
			locale: 'en_US',
			url,
			title,
			description,
			siteName: SEO_CONFIG.siteName,
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
			...(publishedTime && { publishedTime }),
			...(modifiedTime && { modifiedTime }),
			...(section && { section }),
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [image],
			creator: '@astrobit_dev',
			site: '@astrobit_dev',
		},
		alternates: {
			canonical: url,
		},
		other: {
			'application-name': SEO_CONFIG.siteName,
			'apple-mobile-web-app-capable': 'yes',
			'apple-mobile-web-app-status-bar-style': 'default',
			'apple-mobile-web-app-title': SEO_CONFIG.siteName,
			'format-detection': 'telephone=no',
			'mobile-web-app-capable': 'yes',
			'msapplication-TileColor': '#0B0F1A',
			'msapplication-tap-highlight': 'no',
			'theme-color': '#0B0F1A',
		},
	};
};

export const generateStructuredData = (type: keyof typeof STRUCTURED_DATA = 'organization') => {
	return JSON.stringify(STRUCTURED_DATA[type]);
};

export const generateBreadcrumbStructuredData = (items: Array<{ name: string; url: string }>) => {
	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url,
		})),
	});
};

export const generateArticleStructuredData = (props: {
	title: string;
	description: string;
	image: string;
	url: string;
	publishedTime: string;
	modifiedTime?: string;
	author?: string;
}) => {
	const {
		title,
		description,
		image,
		url,
		publishedTime,
		modifiedTime = publishedTime,
		author = SEO_CONFIG.author,
	} = props;

	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: title,
		description,
		image: [image],
		url,
		datePublished: publishedTime,
		dateModified: modifiedTime,
		author: {
			'@type': 'Organization',
			name: author,
		},
		publisher: {
			'@type': 'Organization',
			name: SEO_CONFIG.companyName,
			logo: {
				'@type': 'ImageObject',
				url: `${SEO_CONFIG.siteUrl}/images/astrobit-icon.webp`,
			},
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': url,
		},
	});
};

export const generateFAQStructuredData = (faqs: Array<{ question: string; answer: string }>) => {
	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map(faq => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer,
			},
		})),
	});
};

export const generateServiceStructuredData = (props: {
	name: string;
	description: string;
	url: string;
	image?: string;
	priceRange?: string;
}) => {
	const { name, description, url, image, priceRange } = props;

	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Service',
		name,
		description,
		url,
		provider: {
			'@type': 'Organization',
			name: SEO_CONFIG.companyName,
			url: SEO_CONFIG.siteUrl,
		},
		areaServed: {
			'@type': 'Country',
			name: 'Worldwide',
		},
		...(image && { image }),
		...(priceRange && { priceRange }),
	});
};
