import React from 'react';

import type { CaseStudyDetail } from '@/lib/interfaces/caseStudies.interface';

import { CARD_STAGGER, STAGGER_DELAYS } from '@/lib/constants/motion';
import { useStaggeredScrollAnimation } from '@/lib/utils/useScrollAnimation';

import CaseStudyCard from '../CaseStudyCard/CaseStudyCard';

interface CaseStudyCardsProps {
	cards: CaseStudyDetail[];
}

const CaseStudyCards: React.FC<CaseStudyCardsProps> = props => {
	const { cards } = props;

	const cardsContainerRef = useStaggeredScrollAnimation(CARD_STAGGER.item, STAGGER_DELAYS.medium);

	return (
		<section className="relative w-full overflow-hidden bg-[#0B0F1A] py-24">
			<div className="tech-grid absolute inset-0 opacity-10"></div>
			<div className="relative container mx-auto px-4">
				<div ref={cardsContainerRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{cards.map((card, index) => (
						<div key={index} style={{ opacity: 0 }}>
							<CaseStudyCard card={card} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CaseStudyCards;
