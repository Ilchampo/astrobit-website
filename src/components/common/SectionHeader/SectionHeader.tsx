import React from 'react';

interface SectionHeaderProps {
	title: string;
	description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = props => {
	const { title, description } = props;

	return (
		<div className="mb-16 text-center">
			<h2 className="font-orbitron mb-4 text-4xl font-bold tracking-wide text-[#EDEDED]">{title}</h2>
			{description && <p className="font-exo2 mx-auto mb-6 max-w-2xl text-xl text-[#A0A0B2]">{description}</p>}
			<div className="flex items-center justify-center gap-4">
				<div className="hero-gradient h-[1px] w-16"></div>
				<div className="h-2 w-2 animate-pulse bg-[#00C9FF]"></div>
				<div className="hero-gradient h-[1px] w-16"></div>
			</div>
		</div>
	);
};

export default SectionHeader;
