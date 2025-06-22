'use client';

import { CASE_STUDIES_CARDS } from '@/lib/constants/caseStudies';
import { DIFFERENTIATORS } from '@/lib/constants/differentiators';
import { SERVICES_CARDS } from '@/lib/constants/services';

import CaseStudies from '@/components/CaseStudies/CaseStudies';
import Differentiators from '@/components/Differentiators/Differentiators';
import LandingHero from '@/components/LandingHero/LandingHero';
import Services from '@/components/Services/Services';

export default function Home() {
	return (
		<div className="w-full">
			<LandingHero
				title="Fueling Growth With Custom Digital Solutions"
				subtitle="We turn vision into velocity with custom-built web experiences designed for scale."
			/>
			<Services cards={SERVICES_CARDS} />
			<CaseStudies cards={CASE_STUDIES_CARDS} />
			<Differentiators cards={DIFFERENTIATORS} />
		</div>
	);
}
