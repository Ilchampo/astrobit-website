import React from 'react';

import type { CaseStudyCard } from '@/lib/interfaces/caseStudies.interface';

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

	return (
		<section id="case-studies" className="relative w-full overflow-hidden bg-[#0B0F1A] py-24">
			<CaseStudiesDecoratives />
			<div className="relative container mx-auto px-4">
				<SectionHeader title="Proven Work, Real Impact" />
				{featuredCards.length > 0 && (
					<div>
						{featuredCards.map((card, index) => (
							<ContentCard key={index} {...card} />
						))}
					</div>
				)}
				{otherCards.length > 0 && (
					<div className="grid gap-8 md:grid-cols-2">
						{otherCards.map((card, index) => (
							<ContentCard key={index} {...card} />
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default CaseStudies;
