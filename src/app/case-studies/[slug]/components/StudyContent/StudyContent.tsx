import React from 'react';

import type { CaseStudy } from '@/lib/interfaces/caseStudies.interface';

import { BarChartIcon, CodeIcon, HelpCircleIcon, InfoIcon, LightbulbIcon } from 'lucide-react';

import { CARD_STAGGER, SCROLL_FADE_UP, STAGGER_DELAYS } from '@/lib/constants/motion';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/lib/utils/useScrollAnimation';
import Image from 'next/image';

import SimpleStudyCard from '../SimpleStudyCard/SimpleCard';

interface StudyContentProps {
	caseStudy: CaseStudy;
}

const StudyContent: React.FC<StudyContentProps> = props => {
	const { title, image, about, challenge, solution, results, services } = props.caseStudy;

	const aboutSectionRef = useScrollAnimation(SCROLL_FADE_UP);
	const aboutImageRef = useScrollAnimation({
		opacity: [0, 1],
		y: [40, 0],
		duration: 0.8,
		delay: 0.3,
		easing: 'ease-out',
	});

	const challengeSectionRef = useScrollAnimation(SCROLL_FADE_UP);
	const solutionSectionRef = useScrollAnimation(SCROLL_FADE_UP);
	const resultsSectionRef = useScrollAnimation(SCROLL_FADE_UP);
	const resultsListRef = useScrollAnimation({
		opacity: [0, 1],
		y: [30, 0],
		duration: 0.8,
		delay: 0.2,
		easing: 'ease-out',
	});

	const servicesSectionRef = useScrollAnimation(SCROLL_FADE_UP);
	const servicesGridRef = useStaggeredScrollAnimation(CARD_STAGGER.item, STAGGER_DELAYS.medium);

	return (
		<div className="relative w-full bg-[#0B0F1A]">
			<section className="relative overflow-hidden py-12">
				<div className="tech-grid absolute inset-0 opacity-10"></div>
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-3xl">
						<div ref={aboutSectionRef} style={{ opacity: 0 }}>
							<h2 className="font-orbitron mb-6 flex items-center gap-3 text-2xl font-bold text-[#EDEDED]">
								<InfoIcon className="h-6 w-6 text-[#00C9FF]" />
								About the Project
							</h2>
							<p className="font-exo2 text-lg leading-relaxed text-[#A0A0B2]">{about}</p>
						</div>
						<div
							ref={aboutImageRef}
							className="relative mt-12 h-64 min-h-[300px] overflow-hidden rounded-sm bg-[#151823] md:h-full md:min-h-[500px]"
							style={{ opacity: 0 }}
						>
							<Image src={image} alt={title} fill className="object-cover" priority />
						</div>
					</div>
				</div>
			</section>

			<section className="relative overflow-hidden py-12">
				<div className="tech-grid absolute inset-0 opacity-10"></div>
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-3xl">
						<div ref={challengeSectionRef} style={{ opacity: 0 }}>
							<h2 className="font-orbitron mb-6 flex items-center gap-3 text-2xl font-bold text-[#EDEDED]">
								<HelpCircleIcon className="h-6 w-6 text-[#00C9FF]" />
								The Challenge
							</h2>
							<p className="font-exo2 text-lg leading-relaxed text-[#A0A0B2]">{challenge}</p>
						</div>
					</div>
				</div>
			</section>

			<section className="relative overflow-hidden py-12">
				<div className="tech-grid absolute inset-0 opacity-10"></div>
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-3xl">
						<div ref={solutionSectionRef} style={{ opacity: 0 }}>
							<h2 className="font-orbitron mb-6 flex items-center gap-3 text-2xl font-bold text-[#EDEDED]">
								<LightbulbIcon className="h-6 w-6 text-[#00C9FF]" />
								The Solution
							</h2>
							<p className="font-exo2 text-lg leading-relaxed text-[#A0A0B2]">{solution}</p>
						</div>
					</div>
				</div>
			</section>

			<section className="relative overflow-hidden py-12">
				<div className="tech-grid absolute inset-0 opacity-10"></div>
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-3xl">
						<div ref={resultsSectionRef} style={{ opacity: 0 }}>
							<h2 className="font-orbitron mb-6 flex items-center gap-3 text-2xl font-bold text-[#EDEDED]">
								<BarChartIcon className="h-6 w-6 text-[#00C9FF]" />
								The Results
							</h2>
						</div>
						<div ref={resultsListRef} style={{ opacity: 0 }}>
							<ul className="space-y-4">
								{results.map((result, index) => (
									<li
										key={index}
										className="font-exo2 flex items-center gap-4 text-lg leading-relaxed text-[#A0A0B2]"
									>
										<div className="h-2 w-2 flex-shrink-0 rounded-full bg-[#00C9FF]"></div>
										<span>{result}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="relative overflow-hidden py-12">
				<div className="tech-grid absolute inset-0 opacity-10"></div>
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-3xl">
						<div ref={servicesSectionRef} style={{ opacity: 0 }}>
							<h2 className="font-orbitron mb-12 flex items-center gap-3 text-2xl font-bold text-[#EDEDED]">
								<CodeIcon className="h-6 w-6 text-[#00C9FF]" />
								Services Provided
							</h2>
						</div>
						<div ref={servicesGridRef} className="grid grid-cols-2 gap-6 md:grid-cols-4">
							{services.map((service, index) => (
								<div key={index} style={{ opacity: 0 }}>
									<SimpleStudyCard icon={service.icon} title={service.title} />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default StudyContent;
