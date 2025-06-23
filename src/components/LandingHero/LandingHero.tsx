import { animate } from 'motion';
import React, { useEffect, useRef } from 'react';

import { BUTTON_HOVER, BUTTON_HOVER_RESET, HERO_ENTRANCE } from '@/lib/constants/motion';
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

	const containerRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const subtitleRef = useRef<HTMLParagraphElement>(null);
	const ctaContainerRef = useRef<HTMLDivElement>(null);
	const techIndicatorRef = useRef<HTMLDivElement>(null);
	const ctaButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			const { delay, duration, easing, ...containerProps } = HERO_ENTRANCE.container;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const options: any = {};
			if (duration !== undefined) {
				options.duration = duration;
			}

			if (easing) {
				options.easing = easing;
			}

			if (delay) {
				setTimeout(() => {
					if (containerRef.current) {
						animate(containerRef.current, containerProps, options);
					}
				}, delay * 1000);
			} else {
				animate(containerRef.current, containerProps, options);
			}
		}

		if (titleRef.current) {
			const { delay, duration, easing, ...titleProps } = HERO_ENTRANCE.title;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const options: any = {};
			if (duration !== undefined) {
				options.duration = duration;
			}

			if (easing) {
				options.easing = easing;
			}

			setTimeout(
				() => {
					if (titleRef.current) {
						animate(titleRef.current, titleProps, options);
					}
				},
				(delay || 0) * 1000,
			);
		}

		if (subtitleRef.current) {
			const { delay, duration, easing, ...subtitleProps } = HERO_ENTRANCE.subtitle;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const options: any = {};
			if (duration !== undefined) {
				options.duration = duration;
			}

			if (easing) {
				options.easing = easing;
			}

			setTimeout(
				() => {
					if (subtitleRef.current) {
						animate(subtitleRef.current, subtitleProps, options);
					}
				},
				(delay || 0) * 1000,
			);
		}

		if (ctaContainerRef.current) {
			const { delay, duration, easing, ...ctaProps } = HERO_ENTRANCE.cta;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const options: any = {};
			if (duration !== undefined) {
				options.duration = duration;
			}

			if (easing) {
				options.easing = easing;
			}

			setTimeout(
				() => {
					if (ctaContainerRef.current) {
						animate(ctaContainerRef.current, ctaProps, options);
					}
				},
				(delay || 0) * 1000,
			);
		}

		if (techIndicatorRef.current) {
			const { delay, duration, easing, ...techProps } = HERO_ENTRANCE.techIndicator;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const options: any = {};
			if (duration !== undefined) {
				options.duration = duration;
			}

			if (easing) {
				options.easing = easing;
			}

			setTimeout(
				() => {
					if (techIndicatorRef.current) {
						animate(techIndicatorRef.current, techProps, options);
					}
				},
				(delay || 0) * 1000,
			);
		}
	}, []);

	const handleButtonHover = () => {
		if (ctaButtonRef.current) {
			const { duration, easing, ...hoverProps } = BUTTON_HOVER;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const options: any = {};
			if (duration !== undefined) {
				options.duration = duration;
			}

			if (easing) {
				options.easing = easing;
			}

			animate(ctaButtonRef.current, hoverProps, options);
		}
	};

	const handleButtonLeave = () => {
		if (ctaButtonRef.current) {
			const { duration, easing, ...resetProps } = BUTTON_HOVER_RESET;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const options: any = {};
			if (duration !== undefined) {
				options.duration = duration;
			}

			if (easing) {
				options.easing = easing;
			}

			animate(ctaButtonRef.current, resetProps, options);
		}
	};

	return (
		<div className="relative min-h-screen w-full overflow-hidden bg-[#0B0F1A]">
			<LandingDecorative />
			<div
				ref={containerRef}
				className="relative z-10 container mx-auto flex h-screen items-center px-4 py-20"
				style={{ opacity: 0 }}
			>
				<div className="max-w-4xl">
					<div className="mb-8">
						<div className="flex items-center">
							<CompanyIcon />
						</div>
					</div>
					<div className="mb-8 h-[1px] w-full bg-[#00C9FF] opacity-30"></div>
					<h1
						ref={titleRef}
						className="font-orbitron mb-6 text-5xl leading-tight font-bold tracking-wide text-[#EDEDED] md:text-6xl"
						style={{ opacity: 0 }}
					>
						{title}
					</h1>
					<p
						ref={subtitleRef}
						className="font-exo2 mb-12 max-w-3xl text-xl text-[#EDEDED] md:text-2xl"
						style={{ opacity: 0 }}
					>
						{subtitle}
					</p>
					<div ref={ctaContainerRef} className="flex items-center" style={{ opacity: 0 }}>
						<button
							ref={ctaButtonRef}
							onClick={() => smoothScroll('#contact')}
							onMouseEnter={handleButtonHover}
							onMouseLeave={handleButtonLeave}
							className="font-orbitron tech-button bg-[#FF6A00] px-8 py-4 font-medium tracking-wider text-[#EDEDED] transition-all duration-300 hover:bg-[#FF6A00] hover:shadow-[0_0_20px_rgba(0,201,255,0.7)]"
							type="button"
							aria-label="Start your journey"
						>
							START YOUR JOURNEY
						</button>
						<div className="hero-gradient ml-8 h-[1px] w-32"></div>
					</div>
					<div ref={techIndicatorRef} style={{ opacity: 0 }}>
						<TechIndicator tech="System Ready." />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingHero;
