import React from 'react';

import type { LucideIcon } from 'lucide-react';

import { CARD_HOVER, CARD_HOVER_RESET } from '@/lib/constants/motion';
import { animate } from 'motion';
import { useRef } from 'react';

interface SimpleCardProps {
	icon: LucideIcon;
	title: string;
}

const SimpleStudyCard: React.FC<SimpleCardProps> = props => {
	const { title } = props;

	const cardRef = useRef<HTMLDivElement>(null);

	const handleMouseEnter = () => {
		if (cardRef.current) {
			const { duration, easing, ...hoverProps } = CARD_HOVER;

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const options: any = {};

			if (duration !== undefined) {
				options.duration = duration;
			}

			if (easing) {
				options.easing = easing;
			}

			animate(cardRef.current, hoverProps, options);
		}
	};

	const handleMouseLeave = () => {
		if (cardRef.current) {
			const { duration, easing, ...resetProps } = CARD_HOVER_RESET;

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const options: any = {};

			if (duration !== undefined) {
				options.duration = duration;
			}

			if (easing) {
				options.easing = easing;
			}

			animate(cardRef.current, resetProps, options);
		}
	};

	return (
		<div
			ref={cardRef}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="group border-opacity-20 relative flex h-full flex-col border border-[#00C9FF]/20 p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,201,255,0.1)]"
		>
			<props.icon className="mb-4 h-8 w-8 flex-shrink-0 text-[#00C9FF]" />
			<p className="font-exo2 flex-grow text-sm text-[#EDEDED]">{title}</p>
			<div className="hero-gradient absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"></div>
		</div>
	);
};

export default SimpleStudyCard;
