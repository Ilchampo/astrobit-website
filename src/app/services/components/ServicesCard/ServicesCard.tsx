import React from 'react';

import { ServiceCard } from '@/lib/interfaces/services.interface';
import { useRouter } from 'next/navigation';

import InfoCard from '@/components/common/InfoCard/InfoCard';

interface ServicesCardProps {
	services: ServiceCard[];
}

const ServicesCard: React.FC<ServicesCardProps> = props => {
	const { services } = props;

	const router = useRouter();

	return (
		<section className="relative w-full overflow-hidden bg-[#0B0F1A] py-24">
			<div className="tech-grid absolute inset-0 opacity-10"></div>
			<div className="relative container mx-auto px-4">
				<div className="grid gap-8 md:grid-cols-3">
					{services.map(service => (
						<InfoCard
							key={service.title}
							icon={service.icon}
							title={service.title}
							description={service.description}
							action={{
								label: service.action.label,
								onClick: () => router.push(service.action.path),
							}}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesCard;
