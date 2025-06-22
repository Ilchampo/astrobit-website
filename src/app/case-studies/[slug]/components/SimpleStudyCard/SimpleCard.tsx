import React from 'react';

import type { LucideIcon } from 'lucide-react';

interface SimpleCardProps {
	icon: LucideIcon;
	title: string;
}

const SimpleStudyCard: React.FC<SimpleCardProps> = props => {
	const { title } = props;

	return (
		<div className="group border-opacity-20 relative border border-[#00C9FF]/20 p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,201,255,0.1)]">
			<props.icon className="mb-4 h-8 w-8 text-[#00C9FF]" />
			<p className="font-exo2 text-sm text-[#EDEDED]">{title}</p>
			<div className="hero-gradient absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"></div>
		</div>
	);
};

export default SimpleStudyCard;
