'use client';

import { animate } from 'motion';
import React, { useRef } from 'react';

import type { CaseStudyDetail } from '@/lib/interfaces/caseStudies.interface';

import { ArrowRightIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { BUTTON_HOVER, BUTTON_HOVER_RESET, CARD_STAGGER, STAGGER_DELAYS } from '@/lib/constants/motion';
import { useStaggeredScrollAnimation } from '@/lib/utils/useScrollAnimation';

interface CaseStudySectionProps {
	caseStudies: CaseStudyDetail[];
}

const CaseStudySection: React.FC<CaseStudySectionProps> = props => {
	const { caseStudies } = props;

	const router = useRouter();
	const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

	const cardsContainerRef = useStaggeredScrollAnimation(CARD_STAGGER.item, STAGGER_DELAYS.medium);

	const handleButtonHover = (index: number) => {
		const button = buttonRefs.current[index];
		if (button) {
			const { duration, easing, ...hoverProps } = BUTTON_HOVER;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const options: any = {};
			if (duration !== undefined) {
				options.duration = duration;
			}

			if (easing) {
				options.easing = easing;
			}

			animate(button, hoverProps, options);
		}
	};

	const handleButtonLeave = (index: number) => {
		const button = buttonRefs.current[index];
		if (button) {
			const { duration, easing, ...resetProps } = BUTTON_HOVER_RESET;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const options: any = {};
			if (duration !== undefined) {
				options.duration = duration;
			}

			if (easing) {
				options.easing = easing;
			}

			animate(button, resetProps, options);
		}
	};

	if (caseStudies.length === 0) {
		return null;
	}

	return (
		<section className="relative w-full overflow-hidden bg-[#0B0F1A] py-24">
			<div className="tech-grid absolute inset-0 opacity-10"></div>
			<div className="relative container mx-auto px-4">
				<div ref={cardsContainerRef} className="mx-auto max-w-4xl space-y-8">
					{caseStudies.map((caseStudy, index) => (
						<div key={index} style={{ opacity: 0 }}>
							<div className="group border-opacity-20 relative border border-[#00C9FF]/20 bg-[#0B0F1A] p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,201,255,0.1)]">
								<div className="absolute top-0 right-0 h-12 w-12 border-t-2 border-r-2 border-[#00C9FF] opacity-30"></div>
								<div className="absolute bottom-0 left-0 h-12 w-12 border-b-2 border-l-2 border-[#00C9FF] opacity-30"></div>
								<div className="relative">
									<h3 className="font-orbitron mb-4 text-2xl font-bold text-[#EDEDED]">
										{caseStudy.title}
									</h3>
									<p className="font-exo2 mb-8 text-[#A0A0B2]">{caseStudy.description}</p>
									{caseStudy.path && (
										<button
											ref={el => {
												buttonRefs.current[index] = el;
											}}
											onClick={() => router.push(caseStudy.path!)}
											onMouseEnter={() => handleButtonHover(index)}
											onMouseLeave={() => handleButtonLeave(index)}
											className="font-exo2 tech-button flex items-center gap-2 bg-[#FF6A00] px-6 py-2 text-[#EDEDED] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,106,0,0.3)]"
										>
											View Case Study
											<ArrowRightIcon className="h-4 w-4" />
										</button>
									)}
								</div>
								<div className="hero-gradient absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CaseStudySection;
