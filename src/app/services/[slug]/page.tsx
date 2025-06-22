'use client';

import type { CaseStudyDetail } from '@/lib/interfaces/caseStudies.interface';
import type { Service } from '@/lib/interfaces/services.interface';

import { CASE_STUDIES_DETAILS } from '@/lib/constants/caseStudies';
import { SERVICES } from '@/lib/constants/services';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import SubPageHeader from '@/components/common/SubPageHeader/SubPageHeader';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import CaseStudySection from './components/CaseStudySection/CaseStudySection';
import DescriptionSection from './components/DescriptionSection/DescriptionSection';
import ProcessSection from './components/ProcessSection/ProcressSection';

export default function Home() {
	const [service, setService] = useState<Service | undefined>(undefined);
	const [caseStudies, setCaseStudies] = useState<CaseStudyDetail[]>([]);

	const { slug } = useParams();

	useEffect(() => {
		const service = SERVICES.find(service => service.slug === slug);
		const caseStudies = CASE_STUDIES_DETAILS.filter(study => service?.caseStudiesIds?.includes(study.slug));

		setService(service);
		setCaseStudies(caseStudies);
	}, [slug]);

	return service ? (
		<div className="w-full bg-[#0B0F1A]">
			<SubPageHeader title={service.title} subtitle={service.subtitle} />
			<DescriptionSection description={service.description} />
			<BenefitsSection title="Key Benefits" benefits={service.benefits} />
			<ProcessSection title="How We Build It" steps={service.steps} />
			<CaseStudySection caseStudies={caseStudies} />
		</div>
	) : null;
}
