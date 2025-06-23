import { animate } from 'motion';
import React, { useRef } from 'react';

import { CARD_HOVER, CARD_HOVER_RESET } from '@/lib/constants/motion';
import type { LucideIcon } from 'lucide-react';

type CardAction = {
	label: string;
	onClick: VoidFunction;
	icon?: LucideIcon;
};

interface InfoCardProps {
	icon?: LucideIcon;
	title: string;
	description: string;
	highlight?: string;
	action?: CardAction;
}

const InfoCard: React.FC<InfoCardProps> = props => {
	const { title, description, highlight, action } = props;

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
			className={`group border-opacity-20 relative border bg-[#0B0F1A] p-8 transition-all duration-300 ${highlight ? 'border-opacity-40 border-[#00C9FF]/50 shadow-[0_0_30px_rgba(0,201,255,0.15)] md:scale-105' : 'border-[#00C9FF]/20 hover:shadow-[0_0_30px_rgba(0,201,255,0.1)]'}`}
		>
			{highlight && (
				<div className="font-orbitron tech-button absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6A00] px-4 py-1 text-sm text-[#EDEDED]">
					{highlight}
				</div>
			)}
			<div
				className={`absolute top-0 right-0 h-8 w-8 border-t-2 border-r-2 border-[#00C9FF] ${highlight ? 'opacity-60' : 'opacity-30'}`}
			></div>
			<div
				className={`absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-[#00C9FF] ${highlight ? 'opacity-60' : 'opacity-30'}`}
			></div>
			<div className="tech-grid absolute inset-0 opacity-5"></div>
			<div className="relative">
				{props.icon && (
					<props.icon className={`mb-6 h-12 w-12 ${highlight ? 'text-[#FF6A00]' : 'text-[#00C9FF]'}`} />
				)}
				<h3 className="font-orbitron mb-4 text-xl font-bold text-[#EDEDED]">{title}</h3>
				<p className="font-exo2 text-[#A0A0B2]">{description}</p>
				{action && (
					<button
						onClick={action.onClick}
						type="button"
						aria-label={action.label}
						className={`font-exo2 tech-button mt-6 px-6 py-2 text-[#EDEDED] transition-all duration-300 ${highlight ? 'bg-[#FF6A00] hover:shadow-[0_0_20px_rgba(255,106,0,0.3)]' : 'bg-[#FF6A00] hover:shadow-[0_0_20px_rgba(0,201,255,0.3)]'}`}
					>
						{action.label}
					</button>
				)}
			</div>
			<div
				className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${highlight ? 'bg-[#FF6A00]' : 'hero-gradient'}`}
			></div>
		</div>
	);
};

export default InfoCard;
