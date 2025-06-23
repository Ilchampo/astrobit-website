import React from 'react';

import type { ServiceBenefit } from '@/lib/interfaces/services.interface';

import { CARD_STAGGER, SCROLL_FADE_UP, STAGGER_DELAYS } from '@/lib/constants/motion';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/lib/utils/useScrollAnimation';

import InfoCard from '@/components/common/InfoCard/InfoCard';
import SectionHeader from '@/components/common/SectionHeader/SectionHeader';

interface BenefitsSectionProps {
	title: string;
	benefits: ServiceBenefit[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = props => {
	const { title, benefits } = props;

	const sectionHeaderRef = useScrollAnimation(SCROLL_FADE_UP);
	const cardsContainerRef = useStaggeredScrollAnimation(CARD_STAGGER.item, STAGGER_DELAYS.medium);

	return (
		<section className="relative w-full overflow-hidden bg-[#0B0F1A] py-24">
			<div className="tech-grid absolute inset-0 opacity-10"></div>
			<div className="relative container mx-auto px-4">
				<div ref={sectionHeaderRef} style={{ opacity: 0 }}>
					<SectionHeader title={title} />
				</div>
				<div ref={cardsContainerRef} className="grid gap-8 md:grid-cols-2">
					{benefits.map((benefit, index) => (
						<div key={index} style={{ opacity: 0 }}>
							<InfoCard title={benefit.title} description={benefit.description} icon={benefit.icon} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BenefitsSection;
