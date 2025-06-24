'use client';

import React from 'react';

import type { ProcessStep } from '@/lib/interfaces/process.interface';

import { SCROLL_FADE_UP, STEPPER_FADE_UP } from '@/lib/constants/motion';
import { useScrollAnimation } from '@/lib/utils/useScrollAnimation';

import SectionHeader from '@/components/common/SectionHeader/SectionHeader';
import Stepper from '@/components/common/Stepper/Stepper';

interface ProcessSectionProps {
	title: string;
	steps: ProcessStep[];
}

const ProcessSection: React.FC<ProcessSectionProps> = props => {
	const { title, steps } = props;

	const sectionHeaderRef = useScrollAnimation(SCROLL_FADE_UP);
	const stepperRef = useScrollAnimation(STEPPER_FADE_UP);

	return (
		<section className="relative w-full overflow-hidden bg-[#0B0F1A] py-24">
			<div className="tech-grid absolute inset-0 opacity-10"></div>
			<div className="relative container mx-auto px-4">
				<div ref={sectionHeaderRef} style={{ opacity: 0 }}>
					<SectionHeader title={title} />
				</div>
				<div ref={stepperRef} style={{ opacity: 0 }}>
					<Stepper
						steps={steps}
						className={steps.length >= 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'}
						secondary
					/>
				</div>
			</div>
		</section>
	);
};

export default ProcessSection;
