'use client';

import type { CaseStudy } from '@/lib/interfaces/caseStudies.interface';

import { CASE_STUDIES } from '@/lib/constants/caseStudies';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import SubPageHeader from '@/components/common/SubPageHeader/SubPageHeader';
import StudyContent from './components/StudyContent/StudyContent';

export default function Home() {
	const [caseStudy, setCaseStudy] = useState<CaseStudy | undefined>(undefined);

	const { slug } = useParams();

	useEffect(() => {
		const caseStudy = CASE_STUDIES.find(study => study.slug === slug);
		setCaseStudy(caseStudy);
	}, [slug]);

	return caseStudy ? (
		<div className="w-full bg-[#0B0F1A]">
			<SubPageHeader title={caseStudy.title} subtitle={caseStudy.subtitle} />
			<StudyContent caseStudy={caseStudy} />
		</div>
	) : null;
}
