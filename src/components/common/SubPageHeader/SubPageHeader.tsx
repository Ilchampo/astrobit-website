'use client';

import React from 'react';

import { SUB_PAGE_HEADER_ENTRANCE } from '@/lib/constants/motion';
import { animate } from 'motion';
import { useEffect, useRef } from 'react';

import BreadCrumb from '@/components/common/BreadCrumb/BreadCrumb';
import SubPageHeaderDecorative from '@/components/common/Decoratives/SubPageHeaderDecorative';
import TechIndicator from '../TechIndicator/TechIndicator';

interface SubPageHeaderProps {
	title: string;
	subtitle: string;
}

const SubPageHeader: React.FC<SubPageHeaderProps> = props => {
	const { title, subtitle } = props;

	const containerRef = useRef<HTMLDivElement>(null);
	const breadcrumbRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const subtitleRef = useRef<HTMLParagraphElement>(null);
	const techIndicatorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			const { delay, duration, easing, ...containerProps } = SUB_PAGE_HEADER_ENTRANCE.container;
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

		if (breadcrumbRef.current) {
			const { delay, duration, easing, ...breadcrumbProps } = SUB_PAGE_HEADER_ENTRANCE.breadcrumb;
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
					if (breadcrumbRef.current) {
						animate(breadcrumbRef.current, breadcrumbProps, options);
					}
				},
				(delay || 0) * 1000,
			);
		}

		if (titleRef.current) {
			const { delay, duration, easing, ...titleProps } = SUB_PAGE_HEADER_ENTRANCE.title;
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
			const { delay, duration, easing, ...subtitleProps } = SUB_PAGE_HEADER_ENTRANCE.subtitle;
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

		if (techIndicatorRef.current) {
			const { delay, duration, easing, ...techProps } = SUB_PAGE_HEADER_ENTRANCE.techIndicator;
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

	return (
		<div className="relative min-h-[60vh] w-full overflow-hidden bg-[#0B0F1A] pt-32 pb-24">
			<SubPageHeaderDecorative />
			<div ref={containerRef} className="relative container mx-auto px-4" style={{ opacity: 0 }}>
				<div className="mx-auto max-w-4xl text-center">
					<div ref={breadcrumbRef} style={{ opacity: 0 }}>
						<BreadCrumb />
					</div>
					<h1
						ref={titleRef}
						className="font-orbitron mb-6 text-5xl font-bold tracking-wide text-[#EDEDED] md:text-6xl"
						style={{ opacity: 0 }}
					>
						{title}
					</h1>
					<p
						ref={subtitleRef}
						className="font-exo2 mb-12 text-xl text-[#EDEDED] md:text-2xl"
						style={{ opacity: 0 }}
					>
						{subtitle}
					</p>
					<div ref={techIndicatorRef} style={{ opacity: 0 }}>
						<TechIndicator tech="CASE STUDY ACTIVE." />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubPageHeader;
