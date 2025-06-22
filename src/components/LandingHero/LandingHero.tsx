import React from 'react';

import { smoothScroll } from '@/lib/utils/smoothScroll';

import CompanyIcon from '@/components/common/CompanyIcon/CompanyIcon';
import LandingDecorative from '@/components/common/Decoratives/LandingDecorative';
import TechIndicator from '@/components/common/TechIndicator/TechIndicator';

interface LandingHeroProps {
	title: string;
	subtitle: string;
}

const LandingHero: React.FC<LandingHeroProps> = props => {
	const { title, subtitle } = props;

	return (
		<div className="relative min-h-screen w-full overflow-hidden bg-[#0B0F1A]">
			<LandingDecorative />
			<div className="relative z-10 container mx-auto flex h-screen items-center px-4 py-20">
				<div className="max-w-4xl">
					<div className="mb-8">
						<div className="flex items-center">
							<CompanyIcon />
						</div>
					</div>
					<div className="mb-8 h-[1px] w-full bg-[#00C9FF] opacity-30"></div>
					<h1 className="font-orbitron mb-6 text-5xl leading-tight font-bold tracking-wide text-[#EDEDED] md:text-6xl">
						{title}
					</h1>
					<p className="font-exo2 mb-12 max-w-3xl text-xl text-[#EDEDED] md:text-2xl">{subtitle}</p>
					<div className="flex items-center">
						<button
							onClick={() => smoothScroll('#contact')}
							className="font-orbitron tech-button bg-[#FF6A00] px-8 py-4 font-medium tracking-wider text-[#EDEDED] transition-all duration-300 hover:bg-[#FF6A00] hover:shadow-[0_0_20px_rgba(0,201,255,0.7)]"
							type="button"
							aria-label="Start your journey"
						>
							START YOUR JOURNEY
						</button>
						<div className="hero-gradient ml-8 h-[1px] w-32"></div>
					</div>
					<TechIndicator tech="System Ready." />
				</div>
			</div>
		</div>
	);
};

export default LandingHero;
