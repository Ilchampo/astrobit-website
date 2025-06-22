import React from 'react';

import type { ProcessStep } from '@/lib/interfaces/process.interface';

import SectionHeader from '@/components/common/SectionHeader/SectionHeader';
import Stepper from '@/components/common/Stepper/Stepper';

interface ServiceProcessProps {
	steps: ProcessStep[];
}

const ServiceProcess: React.FC<ServiceProcessProps> = props => {
	const { steps } = props;

	return (
		<section className="relative w-full overflow-hidden bg-[#0B0F1A] py-24">
			<div className="tech-grid absolute inset-0 opacity-10"></div>
			<div className="relative container mx-auto px-4">
				<SectionHeader title="A Process That Moves Fast — and Gets Results" />
				<Stepper steps={steps} />
			</div>
		</section>
	);
};

export default ServiceProcess;
