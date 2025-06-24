'use client';

import { SCROLL_TRIGGER_OPTIONS } from '@/lib/constants/motion';
import { animate } from 'motion';
import { useEffect, useRef } from 'react';

type AnimationConfig = {
	opacity?: number[];
	y?: number[];
	x?: number[];
	scale?: number[];
	duration?: number;
	delay?: number;
	easing?: string;
	repeat?: number;
};

export const useScrollAnimation = (animationConfig: AnimationConfig, triggerOnce: boolean = true) => {
	const elementRef = useRef<HTMLDivElement>(null);
	const hasAnimated = useRef(false);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) {
			return;
		}

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					if (!hasAnimated.current || !triggerOnce) {
						const { delay, duration, easing, repeat, ...animationProps } = animationConfig;

						const cleanAnimationProps: Record<string, number[]> = {};
						if (animationProps.opacity) {
							cleanAnimationProps.opacity = animationProps.opacity;
						}

						if (animationProps.y) {
							cleanAnimationProps.y = animationProps.y;
						}

						if (animationProps.x) {
							cleanAnimationProps.x = animationProps.x;
						}

						if (animationProps.scale) {
							cleanAnimationProps.scale = animationProps.scale;
						}

						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						const animationOptions: any = {};
						if (duration !== undefined) {
							animationOptions.duration = duration;
						}

						if (easing) {
							animationOptions.easing = easing;
						}

						if (repeat !== undefined) {
							animationOptions.repeat = repeat;
						}

						if (delay) {
							setTimeout(() => animate(element, cleanAnimationProps, animationOptions), delay * 1000);
						} else {
							animate(element, cleanAnimationProps, animationOptions);
						}

						hasAnimated.current = true;
					}
				}
			});
		}, SCROLL_TRIGGER_OPTIONS);

		observer.observe(element);

		return () => observer.disconnect();
	}, [animationConfig, triggerOnce]);

	return elementRef;
};

export const useStaggeredScrollAnimation = (
	animationConfig: AnimationConfig,
	staggerDelay: number = 0.1,
	triggerOnce: boolean = true,
) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const hasAnimated = useRef(false);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) {
			return;
		}

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					if (!hasAnimated.current || !triggerOnce) {
						const children = Array.from(container.children) as HTMLElement[];
						const { delay: baseDelay, duration, easing, repeat, ...animationProps } = animationConfig;

						children.forEach((child, index) => {
							const totalDelay = (baseDelay || 0) + index * staggerDelay;

							const cleanAnimationProps: Record<string, number[]> = {};
							if (animationProps.opacity) {
								cleanAnimationProps.opacity = animationProps.opacity;
							}

							if (animationProps.y) {
								cleanAnimationProps.y = animationProps.y;
							}

							if (animationProps.x) {
								cleanAnimationProps.x = animationProps.x;
							}

							if (animationProps.scale) {
								cleanAnimationProps.scale = animationProps.scale;
							}

							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							const animationOptions: any = {};
							if (duration !== undefined) {
								animationOptions.duration = duration;
							}

							if (easing) {
								animationOptions.easing = easing;
							}

							if (repeat !== undefined) {
								animationOptions.repeat = repeat;
							}

							if (totalDelay > 0) {
								setTimeout(
									() => animate(child, cleanAnimationProps, animationOptions),
									totalDelay * 1000,
								);
							} else {
								animate(child, cleanAnimationProps, animationOptions);
							}
						});

						hasAnimated.current = true;
					}
				}
			});
		}, SCROLL_TRIGGER_OPTIONS);

		observer.observe(container);

		return () => observer.disconnect();
	}, [animationConfig, staggerDelay, triggerOnce]);

	return containerRef;
};
