import type { ProcessStep } from '@/lib/interfaces/process.interface';
import type { Service, ServiceCard } from '@/lib/interfaces/services.interface';

export const SERVICES_CARDS: ServiceCard[] = [
	{
		icon: 'LayoutGrid',
		title: 'Web Applications',
		description: 'Powerful, scalable platforms custom-built for your growth.',
		action: {
			label: 'Explore',
			path: '/services/web-applications',
		},
	},
	{
		icon: 'Rocket',
		title: 'Landing Pages',
		description: 'Laser-focused, conversion-optimized single pages.',
		highlight: 'Most Popular',
		action: {
			label: 'Explore',
			path: '/services/landing-pages',
		},
	},
	{
		icon: 'Bot',
		title: 'Chatbots',
		description: 'Smart assistants that automate conversations and support.',
		action: {
			label: 'Explore',
			path: '/services/chatbots',
		},
	},
];

export const SERVICES_AVAILABLE: ServiceCard[] = [
	{
		icon: 'LayoutGrid',
		title: 'Web Applications',
		description:
			"Custom platforms built for growth. Scalable, secure, and tailored to your business — whether you're building an MVP or a full-scale system.",
		action: {
			label: 'Explore Web Applications',
			path: '/services/web-applications',
		},
	},
	{
		icon: 'Rocket',
		title: 'Landing Pages',
		description:
			'Conversion-first design for product launches, campaigns, and lead generation. Beautifully crafted and optimized to help you convert visitors into users.',
		action: {
			label: 'Explore Landing Pages',
			path: '/services/landing-pages',
		},
	},
	{
		icon: 'Bot',
		title: 'Chatbots',
		description:
			'Automated conversations that work 24/7. From lead capture to support, we design and develop smart assistants that improve efficiency and engagement.',
		action: {
			label: 'Explore Chatbots',
			path: '/services/chatbots',
		},
	},
];

export const SERVICE_PROCESS: ProcessStep[] = [
	{
		icon: 'Search',
		title: 'Discovery & Planning',
		description: 'We analyze your needs and create a detailed roadmap.',
	},
	{
		icon: 'Code',
		title: 'Design & Build',
		description: 'Our team brings your vision to life with clean code and sharp design.',
	},
	{
		icon: 'Rocket',
		title: 'Launch & Iterate',
		description: 'We deploy your solution and continuously improve based on real data.',
	},
];

export const SERVICES: Service[] = [
	{
		slug: 'web-applications',
		title: 'Web Applications',
		subtitle:
			"Custom platforms built for growth. Scalable, secure, and tailored to your business — whether you're building an MVP or a full-scale system.",
		description:
			"Transform your business with custom web applications that scale with your ambitions. We build robust, user-friendly platforms that power your operations and delight your users—whether you're launching an MVP or scaling to enterprise.",
		benefits: [
			{
				icon: 'LayoutGrid',
				title: 'Scalable & Secure',
				description:
					'Built for growth. Our systems are designed to handle high traffic and ensure data security.',
			},
			{
				icon: 'Code',
				title: 'Customized Solutions',
				description: 'Tailored to your needs. We build solutions that fit your business and your users.',
			},
			{
				icon: 'Rocket',
				title: 'Fast & Reliable',
				description:
					'Built for speed. Our systems are designed to be fast and reliable, so you can focus on your business.',
			},
			{
				icon: 'Smartphone',
				title: 'Mobile-First Design',
				description: 'Responsive design that works seamlessly across all devices.',
			},
		],
		steps: [
			{
				icon: 'Search',
				title: 'Discovery & Planning',
				description: 'We analyze your needs and create a detailed roadmap.',
			},
			{
				icon: 'PenTool',
				title: 'Design & Prototyping',
				description: 'We create a visual representation of your application and test it with you.',
			},
			{
				icon: 'Code',
				title: 'Development & Testing',
				description: 'We build your application using the latest technologies.',
			},
			{
				icon: 'Rocket',
				title: 'Launch & Optimization',
				description: 'We deploy your application and continuously improve based on real data.',
			},
		],
		caseStudiesIds: ['garosa-dist', 'llegar-casa'],
	},
	{
		slug: 'landing-pages',
		title: 'Landing Pages',
		subtitle: 'Beautiful, conversion-optimized single pages.',
		description:
			'Launch products and campaigns with high-converting landing pages that turn visitors into customers. Our landing pages combine stunning design with data-driven optimization to deliver results that matter.',
		benefits: [
			{
				icon: 'Zap',
				title: 'Fast Load & SEO-ready',
				description: 'Lightning-fast pages optimized for search engines.',
			},
			{
				icon: 'PenTool',
				title: 'Custom Design',
				description: 'Pixel-perfect designs aligned with your brand identity.',
			},
			{
				icon: 'ChartLine',
				title: 'Lead Capture & Analytics',
				description: 'Built-in tools to convert and track visitors.',
			},
			{
				icon: 'Smartphone',
				title: 'Device Optimized',
				description: 'Perfect display on every screen size.',
			},
		],
		steps: [
			{
				icon: 'Search',
				title: 'Discovery & Planning',
				description: 'We analyze your needs and create a detailed roadmap.',
			},
			{
				icon: 'PenTool',
				title: 'Design & Prototyping',
				description: 'We create a visual representation of your application and test it with you.',
			},
			{
				icon: 'Code',
				title: 'Development & Testing',
				description: 'We build your application using the latest technologies.',
			},
			{
				icon: 'Rocket',
				title: 'Launch & Optimization',
				description: 'We deploy your application and continuously improve based on real data.',
			},
		],
		caseStudiesIds: ['insepet', 'altiore-fiducia', 'predador-elite'],
	},
	{
		slug: 'chatbots',
		title: 'Chatbots',
		subtitle: 'Smart assistants that automate conversations and support 24/7.',
		description:
			'Enhance your customer service and automate lead generation with AI-powered chatbots. Our custom solutions handle routine queries, qualify leads, and provide instant support—all while maintaining a human touch.',
		benefits: [
			{
				icon: 'BrainCircuit',
				title: 'Custom Conversation Flows',
				description: 'Tailored dialogue paths that feel natural and human.',
			},
			{
				icon: 'Code',
				title: 'API & CRM Integration',
				description: 'Seamless connection with your existing tools.',
			},
			{
				icon: 'Zap',
				title: 'Smart Triggers',
				description: 'Context-aware interactions at the right moment.',
			},
			{
				icon: 'Clock',
				title: '24/7 Support',
				description: 'Round-the-clock assistance with minimal effort.',
			},
		],
		steps: [
			{
				icon: 'Search',
				title: 'Discovery & Planning',
				description: 'We analyze your needs and create a detailed roadmap to build your chatbot.',
			},
			{
				icon: 'Code',
				title: 'Development & Testing',
				description: 'We build your chatbot using the latest technologies and test it with you.',
			},
			{
				icon: 'Rocket',
				title: 'Launch & Optimization',
				description: 'We deploy your chatbot and continuously improve based on real data.',
			},
		],
		caseStudiesIds: [],
	},
];
