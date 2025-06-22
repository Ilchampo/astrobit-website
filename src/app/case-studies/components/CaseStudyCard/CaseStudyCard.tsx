import React from 'react';

import type { CaseStudyDetail } from '@/lib/interfaces/caseStudies.interface';

import { ArrowRightIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';

interface CaseStudyCardProps {
	card: CaseStudyDetail;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = props => {
	const { card } = props;

	const router = useRouter();

	const handleNavigation = () => {
		router.push(card.path);
	};

	return (
		<div className="group border-opacity-20 relative border border-[#00C9FF]/20 bg-[#0B0F1A] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,201,255,0.15)]">
			<div className="absolute top-0 right-0 h-8 w-8 border-t-2 border-r-2 border-[#00C9FF] opacity-30"></div>
			<div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-[#00C9FF] opacity-30"></div>

			<div className="relative h-48 overflow-hidden">
				<div className="tech-grid absolute inset-0 z-10 opacity-30"></div>
				<Image
					src={card.image}
					alt={card.title}
					width={500}
					height={500}
					className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
					priority
				/>
			</div>
			<div className="p-6">
				<div className="mb-2">
					<span className="font-exo2 text-sm text-[#00C9FF]">{card.subtitle}</span>
				</div>
				<h3 className="font-orbitron mb-3 text-xl font-bold text-[#EDEDED]">{card.title}</h3>
				<p className="font-exo2 mb-6 text-[#A0A0B2]">{card.description}</p>
				<button
					onClick={handleNavigation}
					className="font-exo2 tech-button flex items-center gap-2 bg-[#FF6A00] px-6 py-2 text-[#EDEDED] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,106,0,0.3)]"
				>
					View Case Study
					<ArrowRightIcon className="h-4 w-4" />
				</button>
			</div>
			<div className="hero-gradient absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"></div>
		</div>
	);
};

export default CaseStudyCard;
