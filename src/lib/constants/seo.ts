export const SEO_CONFIG = {
	siteName: 'Astrobit',
	siteUrl: 'https://goastrobit.com',
	companyName: 'Astrobit',
	description:
		'Professional digital solutions agency specializing in web applications, landing pages, and chatbots. We help businesses grow with custom development and modern UI/UX design.',
	keywords: [
		'web development',
		'digital agency',
		'web applications',
		'landing pages',
		'chatbots',
		'UI/UX design',
		'custom development',
		'React development',
		'Next.js development',
		'frontend development',
		'digital solutions',
		'business automation',
		'web design',
		'responsive design',
		'modern web development',
	],
	author: 'Astrobit Team',
	contactEmail: 'pablo@goastrobit.com',
	socialMedia: {
		linkedin: 'https://linkedin.com/company/astrobit',
		github: 'https://github.com/astrobit-dev',
	},
	businessInfo: {
		type: 'Corporation',
		foundedYear: '2024',
		industry: 'Information Technology',
		services: [
			'Web Application Development',
			'Landing Page Creation',
			'Chatbot Development',
			'UI/UX Design',
			'Digital Consulting',
		],
		location: {
			country: 'Ecuador',
			region: 'South America',
		},
	},
};

export const PAGE_METADATA = {
	home: {
		title: 'Astrobit - Professional Digital Solutions Agency',
		description:
			'Transform your business with custom web applications, high-converting landing pages, and intelligent chatbots. Expert development team delivering modern digital solutions.',
		keywords: [
			'digital agency',
			'web applications',
			'landing pages',
			'chatbots',
			'web development',
			'UI/UX design',
			'custom development',
		],
	},
	services: {
		title: 'Our Services - Web Development & Digital Solutions | Astrobit',
		description:
			'Comprehensive digital services including web application development, landing page design, and chatbot creation. Professional development with modern technologies.',
		keywords: [
			'web development services',
			'digital solutions',
			'web applications',
			'landing page development',
			'chatbot development',
			'UI/UX design services',
		],
	},
	caseStudies: {
		title: 'Case Studies - Real Results & Success Stories | Astrobit',
		description:
			"Explore our successful projects and client results. See how we've helped businesses grow with custom web solutions, from startups to established companies.",
		keywords: [
			'case studies',
			'web development portfolio',
			'client success stories',
			'digital transformation',
			'business growth',
			'web development results',
		],
	},
};

export const COMPANY_FAQ = [
	{
		question: 'What services does Astrobit offer?',
		answer: 'Astrobit specializes in three core services: Web Application Development for scalable business platforms, Landing Page Creation for high-converting marketing campaigns, and Chatbot Development for automated customer engagement and support.',
	},
	{
		question: 'How long does it take to complete a project?',
		answer: 'Project timelines vary based on complexity. Landing pages typically take 1-2 weeks, web applications range from 4-12 weeks, and chatbots usually take 2-4 weeks. We provide detailed timelines during our discovery phase.',
	},
	{
		question: 'Do you work with international clients?',
		answer: 'Yes, we work with clients worldwide. We have successfully delivered projects for companies in Ecuador, the United States, and other international markets. We communicate in English and Spanish.',
	},
	{
		question: 'What technologies do you use?',
		answer: 'We use modern technologies including React, Next.js, TypeScript, Tailwind CSS, and Node.js for web development. For chatbots, we integrate with platforms like WhatsApp and various AI services. All our solutions are built with scalability and performance in mind.',
	},
	{
		question: 'Do you provide ongoing support after project completion?',
		answer: 'Yes, we offer ongoing support and maintenance packages. This includes updates, bug fixes, performance optimization, and feature enhancements based on your evolving needs.',
	},
	{
		question: 'How do you ensure project quality?',
		answer: 'We follow a rigorous process including discovery and planning, design prototyping, development with testing, and launch optimization. We maintain constant communication throughout the project and iterate based on your feedback.',
	},
];

export const STRUCTURED_DATA = {
	organization: {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: SEO_CONFIG.companyName,
		url: SEO_CONFIG.siteUrl,
		logo: `${SEO_CONFIG.siteUrl}/images/astrobit-icon.webp`,
		description: SEO_CONFIG.description,
		email: SEO_CONFIG.contactEmail,
		foundingDate: SEO_CONFIG.businessInfo.foundedYear,
		industry: SEO_CONFIG.businessInfo.industry,
		address: {
			'@type': 'PostalAddress',
			addressCountry: SEO_CONFIG.businessInfo.location.country,
			addressRegion: SEO_CONFIG.businessInfo.location.region,
		},
		sameAs: [SEO_CONFIG.socialMedia.linkedin, SEO_CONFIG.socialMedia.github],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Digital Services',
			itemListElement: SEO_CONFIG.businessInfo.services.map((service, index) => ({
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: service,
				},
				position: index + 1,
			})),
		},
	},
	website: {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: SEO_CONFIG.siteName,
		url: SEO_CONFIG.siteUrl,
		description: SEO_CONFIG.description,
		publisher: {
			'@type': 'Organization',
			name: SEO_CONFIG.companyName,
		},
		potentialAction: {
			'@type': 'SearchAction',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: `${SEO_CONFIG.siteUrl}/search?q={search_term_string}`,
			},
			'query-input': 'required name=search_term_string',
		},
	},
	professionalService: {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		name: SEO_CONFIG.companyName,
		image: `${SEO_CONFIG.siteUrl}/images/astrobit-icon.webp`,
		description: SEO_CONFIG.description,
		url: SEO_CONFIG.siteUrl,
		telephone: '+593-XX-XXXX-XXXX',
		email: SEO_CONFIG.contactEmail,
		address: {
			'@type': 'PostalAddress',
			addressCountry: SEO_CONFIG.businessInfo.location.country,
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: -0.1807,
			longitude: -78.4678,
		},
		serviceType: 'Web Development',
		areaServed: {
			'@type': 'Country',
			name: 'Worldwide',
		},
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Web Development Services',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Web Application Development',
						description: 'Custom web applications built with modern technologies',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Landing Page Development',
						description: 'High-converting landing pages optimized for conversions',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Chatbot Development',
						description: 'Intelligent chatbots for customer engagement and automation',
					},
				},
			],
		},
	},
	faq: {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: COMPANY_FAQ.map(faq => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer,
			},
		})),
	},
};
