import React from 'react';

import type { ServiceBenefit } from '@/lib/interfaces/services.interface';

import InfoCard from '@/components/common/InfoCard/InfoCard';
import SectionHeader from '@/components/common/SectionHeader/SectionHeader';

interface BenefitsSectionProps {
	title: string;
	benefits: ServiceBenefit[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = props => {
	const { title, benefits } = props;

	return (
		<section className="relative w-full overflow-hidden bg-[#0B0F1A] py-24">
			<div className="tech-grid absolute inset-0 opacity-10"></div>
			<div className="relative container mx-auto px-4">
				<SectionHeader title={title} />
				<div className="grid gap-8 md:grid-cols-2">
					{benefits.map((benefit, index) => (
						<InfoCard
							key={index}
							title={benefit.title}
							description={benefit.description}
							icon={benefit.icon}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default BenefitsSection;
