'use client';

import { CASE_STUDIES_DETAILS } from '@/lib/constants/caseStudies';

import PageHeader from '@/components/common/PageHeader/PageHeader';
import CaseStudyCards from './components/CaseStudyCards/CaseStudyCards';

export default function Home() {
	return (
		<>
			<PageHeader
				title="Case Studies"
				subtitle="Real results from real projects — a look at how we've helped teams grow, launch, and scale with custom digital solutions."
			/>
			<CaseStudyCards cards={CASE_STUDIES_DETAILS} />
		</>
	);
}
