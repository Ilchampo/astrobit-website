import React from 'react';

interface TechIndicatorProps {
	tech: string;
}

const TechIndicator: React.FC<TechIndicatorProps> = props => {
	const { tech } = props;

	return (
		<div className="mt-12 flex items-center space-x-4">
			<div className="h-2 w-2 animate-pulse bg-[#00C9FF]"></div>
			<div className="h-[1px] w-16 bg-[#00C9FF] opacity-50"></div>
			<div className="font-exo2 text-xs tracking-wider text-[#A0A0B2] uppercase">{tech}</div>
		</div>
	);
};

export default TechIndicator;
