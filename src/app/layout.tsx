import type { Metadata } from 'next';

import { NAVIGATION_ITEMS } from '@/lib/constants/navigation';
import { generateMetadata, generateStructuredData } from '@/lib/utils/seo';
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

export const metadata: Metadata = generateMetadata();

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
				<Navbar items={NAVIGATION_ITEMS} />
				{children}
				<ContactForm />
				<Footer />
			</body>
		</html>
	);
}
