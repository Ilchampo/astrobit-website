import React from 'react';

import type { ProcessStep } from '@/lib/interfaces/process.interface';

interface StepperProps {
	steps: ProcessStep[];
	secondary?: boolean;
	className?: string;
}

const Stepper: React.FC<StepperProps> = props => {
	const { steps, secondary, className } = props;

	return (
		<div className={`grid gap-8 ${className ? className : 'md:grid-cols-3'}`}>
			{steps.map((step, index) => (
				<div key={index} className="relative">
					{index < steps.length - 1 && (
						<div className="hero-gradient absolute top-8 left-1/2 hidden h-[2px] w-full md:block"></div>
					)}
					<div className="relative z-10 text-center">
						<div className="border-opacity-20 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#00C9FF] bg-[#0B0F1A]">
							<step.icon className="h-8 w-8 text-[#00C9FF]" />
						</div>
						<h3
							className={`font-orbitron mb-4 text-xl font-bold ${secondary ? 'text-lg' : 'text-xl'} text-[#EDEDED]`}
						>
							{step.title}
						</h3>
						<p className={`font-exo2 ${secondary ? 'text-sm' : 'text-base'} text-[#A0A0B2]`}>
							{step.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Stepper;
