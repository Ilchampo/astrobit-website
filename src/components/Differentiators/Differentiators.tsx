import React from 'react';

import type { Differentiator } from '@/lib/interfaces/differentiators.interface';

import { CARD_STAGGER, SCROLL_FADE_UP, STAGGER_DELAYS } from '@/lib/constants/motion';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/lib/utils/useScrollAnimation';

import DifferentiatorsDecorative from '@/components/common/Decoratives/DifferentiatorsDecorative';
import InfoCard from '@/components/common/InfoCard/InfoCard';
import SectionHeader from '@/components/common/SectionHeader/SectionHeader';

interface DifferentiatorsProps {
	cards: Differentiator[];
}

const Differentiators: React.FC<DifferentiatorsProps> = props => {
	const { cards } = props;

	const sectionHeaderRef = useScrollAnimation(SCROLL_FADE_UP);
	const cardsContainerRef = useStaggeredScrollAnimation(CARD_STAGGER.item, STAGGER_DELAYS.medium);

	return (
		<section id="differentiators" className="relative w-full overflow-hidden bg-[#0B0F1A] py-24">
			<DifferentiatorsDecorative />
			<div className="relative container mx-auto px-4">
				<div ref={sectionHeaderRef} style={{ opacity: 0 }}>
					<SectionHeader
						title="Why Choose Astrobit"
						description="We deliver results through focus, transparency, and expertise."
					/>
				</div>
				<div ref={cardsContainerRef} className="grid gap-8 md:grid-cols-3">
					{cards.map((card, index) => (
						<div key={index} style={{ opacity: 0 }}>
							<InfoCard {...card} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Differentiators;
