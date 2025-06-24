import React from 'react';

import { TECH_PULSE } from '@/lib/constants/motion';
import { animate } from 'motion';
import { useEffect, useRef } from 'react';

interface TechIndicatorProps {
	tech: string;
}

const TechIndicator: React.FC<TechIndicatorProps> = props => {
	const { tech } = props;

	const pulseRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (pulseRef.current) {
			const { duration, easing, repeat, ...animationProps } = TECH_PULSE;

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const options: any = {};

			if (duration !== undefined) {
				options.duration = duration;
			}

			if (easing) {
				options.easing = easing;
			}

			if (repeat !== undefined) {
				options.repeat = repeat;
			}

			animate(pulseRef.current, animationProps, options);
		}
	}, []);

	return (
		<div className="mt-12 flex items-center space-x-4">
			<div ref={pulseRef} className="h-2 w-2 bg-[#00C9FF]"></div>
			<div className="h-[1px] w-16 bg-[#00C9FF] opacity-50"></div>
			<div className="font-exo2 text-xs tracking-wider text-[#A0A0B2] uppercase">{tech}</div>
		</div>
	);
};

export default TechIndicator;
