import type { Metadata, Viewport } from 'next';

import { NAVIGATION_ITEMS } from '@/lib/constants/navigation';
import { generateStructuredData } from '@/lib/utils/seo';
import { Analytics } from '@vercel/analytics/next';
import { Exo_2, Orbitron } from 'next/font/google';

import ContactForm from '@/components/common/ContactForm/ContactForm';
import Footer from '@/components/common/Footer/Footer';
import Navbar from '@/components/common/Navbar/Navbar';

import './globals.css';

const orbitron = Orbitron({
	variable: '--font-orbitron',
	subsets: ['latin'],
	display: 'swap',
});

const exo2 = Exo_2({
	variable: '--font-exo2',
	subsets: ['latin'],
	display: 'swap',
});

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
	themeColor: '#0B0F1A',
};

export const metadata: Metadata = {
	title: 'Astrobit - Professional Digital Solutions Agency',
	description:
		'Transform your business with custom web applications, high-converting landing pages, and intelligent chatbots. Expert development team delivering modern digital solutions.',
	keywords:
		'digital agency, web applications, landing pages, chatbots, web development, UI/UX design, custom development',
	authors: [{ name: 'Astrobit Team' }],
	creator: 'Astrobit',
	publisher: 'Astrobit',
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
		type: 'website',
		locale: 'en_US',
		url: 'https://goastrobit.com',
		title: 'Astrobit - Professional Digital Solutions Agency',
		description:
			'Transform your business with custom web applications, high-converting landing pages, and intelligent chatbots. Expert development team delivering modern digital solutions.',
		siteName: 'Astrobit',
		images: [
			{
				url: 'https://goastrobit.com/images/astrobit-icon.webp',
				width: 1200,
				height: 630,
				alt: 'Astrobit - Professional Digital Solutions Agency',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Astrobit - Professional Digital Solutions Agency',
		description:
			'Transform your business with custom web applications, high-converting landing pages, and intelligent chatbots. Expert development team delivering modern digital solutions.',
		images: ['https://goastrobit.com/images/astrobit-icon.webp'],
		creator: '@astrobit_dev',
		site: '@astrobit_dev',
	},
	alternates: {
		canonical: 'https://goastrobit.com',
	},
	other: {
		'application-name': 'Astrobit',
		'apple-mobile-web-app-capable': 'yes',
		'apple-mobile-web-app-status-bar-style': 'default',
		'apple-mobile-web-app-title': 'Astrobit',
		'format-detection': 'telephone=no',
		'mobile-web-app-capable': 'yes',
		'msapplication-TileColor': '#0B0F1A',
		'msapplication-tap-highlight': 'no',
		'theme-color': '#0B0F1A',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const organizationStructuredData = generateStructuredData('organization');
	const websiteStructuredData = generateStructuredData('website');
	const professionalServiceStructuredData = generateStructuredData('professionalService');
	const faqStructuredData = generateStructuredData('faq');

	return (
		<html lang="en">
			<Analytics />
			<head>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationStructuredData }} />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: websiteStructuredData }} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: professionalServiceStructuredData }}
				/>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqStructuredData }} />
				<link rel="canonical" href="https://goastrobit.com" />
				<meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
				<meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
			</head>
			<body className={`${orbitron.variable} ${exo2.variable} antialiased`}>
				<header>
					<Navbar items={NAVIGATION_ITEMS} />
				</header>
				<main>{children}</main>
				<ContactForm />
				<Footer />
			</body>
		</html>
	);
}
