import type { CaseStudy, CaseStudyCard, CaseStudyDetail } from '@/lib/interfaces/caseStudies.interface';

import { ChartLine, Code, Droplets, Globe, PenTool, Server, ShieldCheck, Smartphone, Truck } from 'lucide-react';

export const CASE_STUDIES_CARDS: CaseStudyCard[] = [
	{
		icon: Truck,
		title: 'Garosa Dist - Distributor Web App',
		description:
			'A mobile-first web app with offline support built for field distributors. Designed for speed, reliability, and real-world use.',
		featured: true,
		path: '/case-studies/garosa-dist',
		image: '/images/case-studies/garosa-dist.png',
	},
	{
		icon: ShieldCheck,
		title: 'Llegar a Casa',
		description: 'A social-impact web app using public data to help people get home safely in Ecuador.',
		featured: false,
		path: '/case-studies/llegar-casa',
	},
	{
		icon: Droplets,
		title: 'Insepet',
		description: "A clean, multilingual landing page that modernized an Ecuadorian company's online image.",
		featured: false,
		path: '/case-studies/insepet',
	},
];

export const CASE_STUDIES_DETAILS: CaseStudyDetail[] = [
	{
		slug: 'garosa-dist',
		image: '/images/case-studies/garosa-dist.png',
		title: 'Garosa Dist',
		subtitle: 'Web Application',
		description: 'A mobile-first distributor app with offline support for real-world field use.',
		path: '/case-studies/garosa-dist',
	},
	{
		slug: 'llegar-casa',
		image: '/images/case-studies/llegar-casa.png',
		title: 'Llegar a Casa',
		subtitle: 'Web App for Public Safety',
		description: 'Social impact project to help Ecuadorians navigate public transport more safely.',
		path: '/case-studies/llegar-casa',
	},
	{
		slug: 'insepet',
		image: '/images/case-studies/insepet.png',
		title: 'Insepet',
		subtitle: 'Corporate Landing Page',
		description: 'A clean, animated landing page that helped a local company improve its image.',
		path: '/case-studies/insepet',
	},
	{
		slug: 'altiore-fiducia',
		image: '/images/case-studies/altiore-fiducia.png',
		title: 'Altiore Fiducia',
		subtitle: 'Bilingual landing page for a reinsurance startup',
		description: 'A clean, bilingual landing page that helped a local company improve its image.',
		path: '/case-studies/altiore-fiducia',
	},
	{
		slug: 'predador-elite',
		image: '/images/case-studies/predador-elite.png',
		title: 'Predador Elite',
		subtitle: "Website for Ecuador's leading MMA & BJJ academy",
		description: 'A fast, mobile-optimized landing page that helped a local company improve its image.',
		path: '/case-studies/predador-elite',
	},
];

export const CASE_STUDIES: CaseStudy[] = [
	{
		slug: 'garosa-dist',
		image: '/images/case-studies/garosa-dist.png',
		title: 'Garosa Dist',
		subtitle: 'Geolocated PWA for mobile distributors across Peru',
		about: 'Garosa is a medical supplies distributor in Lima, Peru, working with a network of field agents responsible for visiting distribution points throughout the city.',
		challenge:
			'Garosa struggled with false reports from distributors who claimed to have visited delivery points without actually doing so. This lack of accountability led to operational inefficiencies and a loss of trust from partner pharmacies.',
		solution:
			'Astrobit designed and developed a fully offline-capable Progressive Web App (PWA) tailored for mobile use. It included GPS enforcement so that agents could only submit reports when physically present at the assigned locations. Data sync was optimized for unreliable internet conditions.',
		results: [
			'Eliminated fraudulent reporting via enforced geolocation check-ins',
			'Improved operational oversight and field accountability',
			'Seamlessly adopted by the mobile distributor team across Lima',
			'Delivered as a robust PWA with offline functionality for field use',
		],
		services: [
			{ icon: Code, title: 'Web Application' },
			{ icon: PenTool, title: 'UI/UX Design' },
			{ icon: Server, title: 'Backend Development' },
			{ icon: Smartphone, title: 'Offline Support' },
		],
	},
	{
		slug: 'altiore-fiducia',
		image: '/images/case-studies/altiore-fiducia.png',
		title: 'Altiore Fiducia',
		subtitle: 'Multilingual website for an international reinsurer',
		about: 'Altiore Fiducia is a new reinsurance firm based in Ambato, Ecuador, seeking to build international credibility and expand its client base.',
		challenge:
			'As a startup in a high-trust industry, Altiore lacked any online presence, which hindered its credibility when engaging potential international clients.',
		solution:
			'Astrobit created a modern, bilingual (Spanish & English) landing page optimized for credibility and clarity. The UI communicated professionalism and instilled trust in both local and global audiences.',
		results: [
			'Gained international clients within the first year post-launch',
			'Built strong online credibility for outreach and investor trust',
			'Prepared the firm for expansion to Quito and Latin American markets',
		],
		services: [
			{ icon: Globe, title: 'Multilingual' },
			{ icon: PenTool, title: 'UI/UX Design' },
			{ icon: Code, title: 'Frontend Development' },
			{ icon: Server, title: 'Deployment' },
		],
	},
	{
		slug: 'predador-elite',
		image: '/images/case-studies/predador-elite.png',
		title: 'Predador Elite',
		subtitle: 'High-impact landing page for a leading martial arts gym',
		about: 'Predador Elite is a renowned MMA and Brazilian Jiu-Jitsu academy in Ecuador with a strong offline presence but no dedicated website.',
		challenge:
			'Relying solely on social media made it difficult for new students to discover the gym or get basic information like class schedules or coach credentials.',
		solution:
			'Astrobit developed a responsive, fast-loading landing page that showcased the academy’s classes, instructors, testimonials, and contact info in a clean and mobile-first layout.',
		results: [
			'Increased inquiries and sign-ups within the first month',
			'Enhanced visibility and accessibility for new students',
			'Created a centralized digital presence beyond social media',
		],
		services: [
			{ icon: ChartLine, title: 'Analytics' },
			{ icon: PenTool, title: 'UI/UX Design' },
			{ icon: Code, title: 'Frontend Development' },
			{ icon: Server, title: 'Deployment' },
		],
	},
	{
		slug: 'insepet',
		image: '/images/case-studies/insepet.png',
		title: 'Insepet',
		subtitle: 'Bilingual corporate site for an oil & gas inspection firm',
		about: 'Insepet is an established Ecuadorian company providing inspection services in the hydrocarbons sector, with clients like Texaco and other regional operators.',
		challenge:
			'Despite years of operation and international clients, Insepet had no web presence, which affected trust and made it harder to win proposals or present services digitally.',
		solution:
			'Astrobit delivered a multilingual, corporate landing page that highlighted Insepet’s certifications, service areas, and track record. The site was crafted for professionalism and scalability.',
		results: [
			'Strengthened brand image across Latin American markets',
			'Enabled easier communication during RFPs and commercial meetings',
			'Positioned Insepet as a mature and globally-ready firm',
		],
		services: [
			{ icon: Globe, title: 'Multilingual' },
			{ icon: PenTool, title: 'UI/UX Design' },
			{ icon: Code, title: 'Frontend Development' },
			{ icon: Server, title: 'Deployment' },
		],
	},
	{
		slug: 'llegar-casa',
		image: '/images/case-studies/llegar-casa.png',
		title: 'Llegar a Casa',
		subtitle: 'Public safety web app to monitor transport reliability',
		about: 'Llegar a Casa is a civic tech project that helps Ecuadorian commuters assess the safety and reliability of public transport routes.',
		challenge:
			'With rising crime affecting public transport in Ecuador, citizens lacked a tool to validate route safety based on real reports and data.',
		solution:
			'Astrobit built a lightweight web application that aggregates complaints, crowdsourced feedback, and transport data to assign trust levels to bus routes. The UI focused on quick decision-making under stress.',
		results: [
			'Launched in May 2025 with growing traction and public use',
			'130+ unique users and over 500 safety checks performed',
			'Demonstrated Astrobit’s social impact focus and technical agility',
		],
		services: [
			{ icon: Code, title: 'Backend Development' },
			{ icon: PenTool, title: 'UI/UX Design' },
			{ icon: Code, title: 'Frontend Development' },
			{ icon: Server, title: 'Deployment' },
		],
	},
];
