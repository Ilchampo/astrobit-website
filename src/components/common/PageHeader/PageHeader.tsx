'use client';

import React from 'react';

import { BUTTON_HOVER, BUTTON_HOVER_RESET, PAGE_HEADER_ENTRANCE } from '@/lib/constants/motion';
import { smoothScroll } from '@/lib/utils/smoothScroll';
import { animate } from 'motion';
import { useEffect, useRef } from 'react';

import PageHeaderDecorative from '@/components/common/Decoratives/PageHeaderDecorative';
import TechIndicator from '@/components/common/TechIndicator/TechIndicator';

interface PageHeaderProps {
	title: string;
	subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = props => {
	const { title, subtitle } = props;

	const containerRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const subtitleRef = useRef<HTMLParagraphElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const techIndicatorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			const { delay, duration, easing, ...containerProps } = PAGE_HEADER_ENTRANCE.container;
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
			const { delay, duration, easing, ...titleProps } = PAGE_HEADER_ENTRANCE.title;
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
			const { delay, duration, easing, ...subtitleProps } = PAGE_HEADER_ENTRANCE.subtitle;
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

		if (buttonRef.current) {
			const { delay, duration, easing, ...buttonProps } = PAGE_HEADER_ENTRANCE.button;
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
					if (buttonRef.current) {
						animate(buttonRef.current, buttonProps, options);
					}
				},
				(delay || 0) * 1000,
			);
		}

		if (techIndicatorRef.current) {
			const { delay, duration, easing, ...techProps } = PAGE_HEADER_ENTRANCE.techIndicator;
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
		if (buttonRef.current) {
			const { duration, easing, ...hoverProps } = BUTTON_HOVER;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const options: any = {};
			if (duration !== undefined) {
				options.duration = duration;
			}

			if (easing) {
				options.easing = easing;
			}

			animate(buttonRef.current, hoverProps, options);
		}
	};

	const handleButtonLeave = () => {
		if (buttonRef.current) {
			const { duration, easing, ...resetProps } = BUTTON_HOVER_RESET;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const options: any = {};
			if (duration !== undefined) {
				options.duration = duration;
			}

			if (easing) {
				options.easing = easing;
			}

			animate(buttonRef.current, resetProps, options);
		}
	};

	return (
		<div className="relative min-h-[60vh] w-full overflow-hidden bg-[#0B0F1A] pt-32 pb-24">
			<PageHeaderDecorative />
			<div ref={containerRef} className="relative container mx-auto px-4" style={{ opacity: 0 }}>
				<div className="mx-auto max-w-4xl text-center">
					<h1
						ref={titleRef}
						className="font-orbitron mb-6 text-5xl font-bold tracking-wide text-[#EDEDED] md:text-6xl"
						style={{ opacity: 0 }}
					>
						{title}
					</h1>
					<p
						ref={subtitleRef}
						className="font-exo2 mx-auto mb-12 max-w-3xl text-xl text-[#A0A0B2]"
						style={{ opacity: 0 }}
					>
						{subtitle}
					</p>
					<button
						ref={buttonRef}
						onClick={() => smoothScroll('#contact')}
						onMouseEnter={handleButtonHover}
						onMouseLeave={handleButtonLeave}
						className="font-orbitron tech-button bg-[#FF6A00] px-8 py-4 tracking-wider text-[#EDEDED] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,106,0,0.3)]"
						style={{ opacity: 0 }}
					>
						LET&apos;S TALK
					</button>
					<div ref={techIndicatorRef} style={{ opacity: 0 }}>
						<TechIndicator tech="System Active." />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageHeader;
