import React from 'react';

import type { ServiceCard } from '@/lib/interfaces/services.interface';

import { CARD_STAGGER, SCROLL_FADE_UP, STAGGER_DELAYS } from '@/lib/constants/motion';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/lib/utils/useScrollAnimation';
import { useRouter } from 'next/navigation';

import ServicesDecorative from '@/components/common/Decoratives/ServicesDecorative';
import InfoCard from '@/components/common/InfoCard/InfoCard';
import SectionHeader from '@/components/common/SectionHeader/SectionHeader';

interface ServicesProps {
	cards: ServiceCard[];
}

const Services: React.FC<ServicesProps> = props => {
	const { cards } = props;

	const router = useRouter();

	const sectionHeaderRef = useScrollAnimation(SCROLL_FADE_UP);
	const cardsContainerRef = useStaggeredScrollAnimation(CARD_STAGGER.item, STAGGER_DELAYS.medium);

	return (
		<section id="services" className="relative w-full overflow-hidden bg-[#0B0F1A] py-24">
			<ServicesDecorative />
			<div className="relative container mx-auto px-4">
				<div ref={sectionHeaderRef} style={{ opacity: 0 }}>
					<SectionHeader title="Solutions That Launch You Forward" />
				</div>
				<div ref={cardsContainerRef} className="grid gap-8 md:grid-cols-3">
					{cards.map((card, index) => (
						<div key={index} style={{ opacity: 0 }}>
							<InfoCard
								{...card}
								action={{
									label: card.action.label,
									onClick: () => router.push(card.action.path),
								}}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
