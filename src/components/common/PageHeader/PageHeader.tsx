import React from 'react';

import { smoothScroll } from '@/lib/utils/smoothScroll';

import PageHeaderDecorative from '@/components/common/Decoratives/PageHeaderDecorative';
import TechIndicator from '@/components/common/TechIndicator/TechIndicator';

interface PageHeaderProps {
	title: string;
	subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = props => {
	const { title, subtitle } = props;

	return (
		<div className="relative min-h-[60vh] w-full overflow-hidden bg-[#0B0F1A] pt-32 pb-24">
			<PageHeaderDecorative />
			<div className="relative container mx-auto px-4">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="font-orbitron mb-6 text-5xl font-bold tracking-wide text-[#EDEDED] md:text-6xl">
						{title}
					</h1>
					<p className="font-exo2 mx-auto mb-12 max-w-3xl text-xl text-[#A0A0B2]">{subtitle}</p>
					<button
						onClick={() => smoothScroll('#contact')}
						className="font-orbitron tech-button bg-[#FF6A00] px-8 py-4 tracking-wider text-[#EDEDED] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,106,0,0.3)]"
					>
						LET&apos;S TALK
					</button>
					<TechIndicator tech="System Active." />
				</div>
			</div>
		</div>
	);
};

export default PageHeader;
