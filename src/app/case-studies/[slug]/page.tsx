'use client';

import { CASE_STUDIES } from '@/lib/constants/caseStudies';
import { SEO_CONFIG } from '@/lib/constants/seo';
import {
	generateArticleStructuredData,
	generateBreadcrumbStructuredData,
	generateMetadata as generateSEOMetadata,
} from '@/lib/utils/seo';
import { notFound } from 'next/navigation';

import SubPageHeader from '@/components/common/SubPageHeader/SubPageHeader';
import StudyContent from './components/StudyContent/StudyContent';

interface CaseStudyPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
	const { slug } = await params;
	const caseStudy = CASE_STUDIES.find(cs => cs.slug === slug);

	if (!caseStudy) {
		return generateSEOMetadata({
			title: 'Case Study Not Found | Astrobit',
			description: 'The requested case study could not be found.',
		});
	}

	return generateSEOMetadata({
		title: `${caseStudy.title} Case Study - ${caseStudy.subtitle} | Astrobit`,
		description: `${caseStudy.about} Learn how Astrobit helped deliver successful results with custom digital solutions.`,
		keywords: [
			'case study',
			caseStudy.title.toLowerCase(),
			'web development',
			'digital solutions',
			'client success',
			'project results',
			'Astrobit portfolio',
		],
		url: `${SEO_CONFIG.siteUrl}/case-studies/${caseStudy.slug}`,
		image: caseStudy.image,
		type: 'article',
		publishedTime: '2024-01-01T00:00:00.000Z',
		section: 'Case Studies',
	});
}

export async function generateStaticParams() {
	return CASE_STUDIES.map(caseStudy => ({
		slug: caseStudy.slug,
	}));
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
	const { slug } = await params;
	const caseStudy = CASE_STUDIES.find(cs => cs.slug === slug);

	if (!caseStudy) {
		notFound();
	}

	const articleStructuredData = generateArticleStructuredData({
		title: caseStudy.title,
		description: caseStudy.about,
		image: caseStudy.image,
		url: `${SEO_CONFIG.siteUrl}/case-studies/${caseStudy.slug}`,
		publishedTime: '2024-01-01T00:00:00.000Z',
		author: SEO_CONFIG.companyName,
	});

	const breadcrumbStructuredData = generateBreadcrumbStructuredData([
		{ name: 'Home', url: SEO_CONFIG.siteUrl },
		{ name: 'Case Studies', url: `${SEO_CONFIG.siteUrl}/case-studies` },
		{ name: caseStudy.title, url: `${SEO_CONFIG.siteUrl}/case-studies/${caseStudy.slug}` },
	]);

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleStructuredData }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbStructuredData }} />
			<div className="w-full bg-[#0B0F1A]">
				<SubPageHeader title={caseStudy.title} subtitle={caseStudy.subtitle} />
				<StudyContent caseStudy={caseStudy} />
			</div>
		</>
	);
}
