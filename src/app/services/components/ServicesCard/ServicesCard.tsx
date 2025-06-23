import React from 'react';

import type { ServiceCard } from '@/lib/interfaces/services.interface';

import { CARD_STAGGER, STAGGER_DELAYS } from '@/lib/constants/motion';
import { useStaggeredScrollAnimation } from '@/lib/utils/useScrollAnimation';
import { useRouter } from 'next/navigation';

import InfoCard from '@/components/common/InfoCard/InfoCard';

interface ServicesCardProps {
	services: ServiceCard[];
}

const ServicesCard: React.FC<ServicesCardProps> = props => {
	const { services } = props;

	const router = useRouter();

	const cardsContainerRef = useStaggeredScrollAnimation(CARD_STAGGER.item, STAGGER_DELAYS.medium);

	return (
		<section className="relative w-full overflow-hidden bg-[#0B0F1A] py-24">
			<div className="tech-grid absolute inset-0 opacity-10"></div>
			<div className="relative container mx-auto px-4">
				<div ref={cardsContainerRef} className="grid gap-8 md:grid-cols-3">
					{services.map(service => (
						<div key={service.title} style={{ opacity: 0 }}>
							<InfoCard
								icon={service.icon}
								title={service.title}
								description={service.description}
								action={{
									label: service.action.label,
									onClick: () => router.push(service.action.path),
								}}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesCard;
