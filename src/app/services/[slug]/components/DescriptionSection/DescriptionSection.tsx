'use client';

import React from 'react';

import { SCROLL_FADE_UP } from '@/lib/constants/motion';
import { useScrollAnimation } from '@/lib/utils/useScrollAnimation';

interface DescriptionSectionProps {
	description: string;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = props => {
	const { description } = props;

	const descriptionRef = useScrollAnimation(SCROLL_FADE_UP);
	const techAccentRef = useScrollAnimation({
		opacity: [0, 1],
		y: [20, 0],
		duration: 0.6,
		delay: 0.3,
		easing: 'ease-out',
	});

	return (
		<section className="relative w-full overflow-hidden bg-[#0B0F1A] py-24">
			<div className="tech-grid absolute inset-0 opacity-10"></div>
			<div className="relative container mx-auto px-4">
				<div className="mx-auto max-w-3xl text-center">
					<div ref={descriptionRef} style={{ opacity: 0 }}>
						<p className="font-exo2 text-xl leading-relaxed text-[#A0A0B2]">{description}</p>
					</div>

					<div
						ref={techAccentRef}
						className="mt-12 flex items-center justify-center gap-4"
						style={{ opacity: 0 }}
					>
						<div className="hero-gradient h-[1px] w-16"></div>
						<div className="h-2 w-2 animate-pulse bg-[#00C9FF]"></div>
						<div className="hero-gradient h-[1px] w-16"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DescriptionSection;
