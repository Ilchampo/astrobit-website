import React from 'react';

import type { CaseStudyCard } from '@/lib/interfaces/caseStudies.interface';

import { CARD_STAGGER, SCROLL_FADE_UP, STAGGER_DELAYS } from '@/lib/constants/motion';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/lib/utils/useScrollAnimation';

import ContentCard from '@/components/common/ContentCard/ContentCard';
import CaseStudiesDecoratives from '@/components/common/Decoratives/CaseStudiesDecoratives';
import SectionHeader from '@/components/common/SectionHeader/SectionHeader';

interface CaseStudiesProps {
	cards: CaseStudyCard[];
}

const CaseStudies: React.FC<CaseStudiesProps> = props => {
	const { cards } = props;

	const featuredCards = cards.filter(card => card.featured);
	const otherCards = cards.filter(card => !card.featured);

	const sectionHeaderRef = useScrollAnimation(SCROLL_FADE_UP);
	const featuredCardsRef = useStaggeredScrollAnimation(CARD_STAGGER.item, STAGGER_DELAYS.slow);
	const otherCardsRef = useStaggeredScrollAnimation(CARD_STAGGER.item, STAGGER_DELAYS.medium);

	return (
		<section id="case-studies" className="relative w-full overflow-hidden bg-[#0B0F1A] py-24">
			<CaseStudiesDecoratives />
			<div className="relative container mx-auto px-4">
				<div ref={sectionHeaderRef} style={{ opacity: 0 }}>
					<SectionHeader title="Proven Work, Real Impact" />
				</div>
				{featuredCards.length > 0 && (
					<div ref={featuredCardsRef}>
						{featuredCards.map((card, index) => (
							<div key={index} style={{ opacity: 0 }}>
								<ContentCard {...card} />
							</div>
						))}
					</div>
				)}
				{otherCards.length > 0 && (
					<div ref={otherCardsRef} className="grid gap-8 md:grid-cols-2">
						{otherCards.map((card, index) => (
							<div key={index} style={{ opacity: 0 }}>
								<ContentCard {...card} />
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default CaseStudies;
