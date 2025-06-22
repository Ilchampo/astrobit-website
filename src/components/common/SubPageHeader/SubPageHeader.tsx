'use client';

import React from 'react';

import BreadCrumb from '@/components/common/BreadCrumb/BreadCrumb';
import SubPageHeaderDecorative from '@/components/common/Decoratives/SubPageHeaderDecorative';
import TechIndicator from '../TechIndicator/TechIndicator';

interface SubPageHeaderProps {
	title: string;
	subtitle: string;
}

const SubPageHeader: React.FC<SubPageHeaderProps> = props => {
	const { title, subtitle } = props;

	return (
		<div className="relative min-h-[60vh] w-full overflow-hidden bg-[#0B0F1A] pt-32 pb-24">
			<SubPageHeaderDecorative />
			<div className="relative container mx-auto px-4">
				<div className="mx-auto max-w-4xl text-center">
					<BreadCrumb />
					<h1 className="font-orbitron mb-6 text-5xl font-bold tracking-wide text-[#EDEDED] md:text-6xl">
						{title}
					</h1>
					<p className="font-exo2 mb-12 text-xl text-[#EDEDED] md:text-2xl">{subtitle}</p>
					<TechIndicator tech="CASE STUDY ACTIVE." />
				</div>
			</div>
		</div>
	);
};

export default SubPageHeader;
