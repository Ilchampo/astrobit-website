import { CASE_STUDIES_DETAILS } from '@/lib/constants/caseStudies';
import { PAGE_METADATA, SEO_CONFIG } from '@/lib/constants/seo';
import { generateBreadcrumbStructuredData, generateMetadata } from '@/lib/utils/seo';

import PageHeader from '@/components/common/PageHeader/PageHeader';
import CaseStudyCards from './components/CaseStudyCards/CaseStudyCards';

export const metadata = generateMetadata({
	title: PAGE_METADATA.caseStudies.title,
	description: PAGE_METADATA.caseStudies.description,
	keywords: PAGE_METADATA.caseStudies.keywords,
	url: `${SEO_CONFIG.siteUrl}/case-studies`,
});

export default function CaseStudiesPage() {
	const breadcrumbStructuredData = generateBreadcrumbStructuredData([
		{ name: 'Home', url: SEO_CONFIG.siteUrl },
		{ name: 'Case Studies', url: `${SEO_CONFIG.siteUrl}/case-studies` },
	]);

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbStructuredData }} />
			<PageHeader
				title="Case Studies"
				subtitle="Real results from real projects — a look at how we've helped teams grow, launch, and scale with custom digital solutions."
			/>
			<CaseStudyCards cards={CASE_STUDIES_DETAILS} />
		</>
	);
}
