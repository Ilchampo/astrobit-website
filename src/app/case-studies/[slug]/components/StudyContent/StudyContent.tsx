import React from 'react';

import type { CaseStudy } from '@/lib/interfaces/caseStudies.interface';

import { BarChartIcon, CodeIcon, HelpCircleIcon, InfoIcon, LightbulbIcon } from 'lucide-react';

import Image from 'next/image';
import SimpleStudyCard from '../SimpleStudyCard/SimpleCard';

interface StudyContentProps {
	caseStudy: CaseStudy;
}

const StudyContent: React.FC<StudyContentProps> = props => {
	const { title, image, about, challenge, solution, results, services } = props.caseStudy;

	return (
		<div className="relative w-full bg-[#0B0F1A]">
			<section className="relative overflow-hidden py-12">
				<div className="tech-grid absolute inset-0 opacity-10"></div>
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-3xl">
						<h2 className="font-orbitron mb-6 flex items-center gap-3 text-2xl font-bold text-[#EDEDED]">
							<InfoIcon className="h-6 w-6 text-[#00C9FF]" />
							About the Project
						</h2>
						<p className="font-exo2 text-lg leading-relaxed text-[#A0A0B2]">{about}</p>
						<div className="relative mt-12 h-64 min-h-[300px] overflow-hidden rounded-sm bg-[#151823] md:h-full md:min-h-[500px]">
							<Image src={image} alt={title} fill className="object-cover" priority />
						</div>
					</div>
				</div>
			</section>
			<section className="relative overflow-hidden py-12">
				<div className="tech-grid absolute inset-0 opacity-10"></div>
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-3xl">
						<h2 className="font-orbitron mb-6 flex items-center gap-3 text-2xl font-bold text-[#EDEDED]">
							<HelpCircleIcon className="h-6 w-6 text-[#00C9FF]" />
							The Challenge
						</h2>
						<p className="font-exo2 text-lg leading-relaxed text-[#A0A0B2]">{challenge}</p>
					</div>
				</div>
			</section>
			<section className="relative overflow-hidden py-12">
				<div className="tech-grid absolute inset-0 opacity-10"></div>
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-3xl">
						<h2 className="font-orbitron mb-6 flex items-center gap-3 text-2xl font-bold text-[#EDEDED]">
							<LightbulbIcon className="h-6 w-6 text-[#00C9FF]" />
							The Solution
						</h2>
						<p className="font-exo2 text-lg leading-relaxed text-[#A0A0B2]">{solution}</p>
					</div>
				</div>
			</section>
			<section className="relative overflow-hidden py-12">
				<div className="tech-grid absolute inset-0 opacity-10"></div>
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-3xl">
						<h2 className="font-orbitron mb-6 flex items-center gap-3 text-2xl font-bold text-[#EDEDED]">
							<BarChartIcon className="h-6 w-6 text-[#00C9FF]" />
							The Results
						</h2>
						<ul className="space-y-4">
							{results.map((result, index) => (
								<li
									key={index}
									className="font-exo2 flex items-center gap-4 text-lg leading-relaxed text-[#A0A0B2]"
								>
									<div className="h-2 w-2 bg-[#00C9FF]"></div>
									{result}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
			<section className="relative overflow-hidden py-12">
				<div className="tech-grid absolute inset-0 opacity-10"></div>
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-3xl">
						<h2 className="font-orbitron mb-12 flex items-center gap-3 text-2xl font-bold text-[#EDEDED]">
							<CodeIcon className="h-6 w-6 text-[#00C9FF]" />
							Services Provided
						</h2>
						<div className="grid grid-cols-2 gap-6 md:grid-cols-4">
							{services.map((service, index) => (
								<SimpleStudyCard key={index} icon={service.icon} title={service.title} />
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default StudyContent;
