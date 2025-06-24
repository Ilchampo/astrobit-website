'use client';

import React from 'react';

import type { LucideIcon } from 'lucide-react';

import { getIcon } from '@/lib/utils/iconMapper';
import { ArrowRightIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import CompanyLogo from '@/components/common/CompanyLogo/CompanyLogo';
import Image from 'next/image';

interface ContentCardProps {
	icon: string | LucideIcon;
	title: string;
	description: string;
	path: string;
	featured: boolean;
	image?: string;
}

const ContentCard: React.FC<ContentCardProps> = props => {
	const { title, description, path, featured, image } = props;

	const router = useRouter();

	const IconComponent = typeof props.icon === 'string' ? getIcon(props.icon) : props.icon;

	return (
		<div className="group border-opacity-20 relative mb-12 border border-[#00C9FF]/20 bg-[#0B0F1A] p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,201,255,0.15)]">
			<div className="absolute top-0 right-0 h-12 w-12 border-t-2 border-r-2 border-[#00C9FF] opacity-30"></div>
			<div className="absolute bottom-0 left-0 h-12 w-12 border-b-2 border-l-2 border-[#00C9FF] opacity-30"></div>
			<div className="tech-grid absolute inset-0 opacity-5"></div>
			<div className={`relative grid items-center gap-8 ${featured ? 'md:grid-cols-2' : ''}`}>
				<div>
					<CompanyLogo className="mb-6">
						<IconComponent className="h-6 w-6" />
					</CompanyLogo>
					<h3 className={`font-orbitron mb-4 ${featured ? 'text-2xl' : 'text-xl'} font-bold text-[#EDEDED]`}>
						{title}
					</h3>
					<p className="font-exo2 mb-8 text-[#A0A0B2]">{description}</p>
					<button
						onClick={() => router.push(path)}
						className="font-exo2 tech-button flex items-center gap-2 bg-[#FF6A00] px-6 py-2 text-[#EDEDED] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,106,0,0.3)]"
						aria-label={`View full case study for ${title}`}
						role="link"
						type="button"
					>
						{featured ? 'View Full Case Study' : 'View Details'}
						<ArrowRightIcon className="h-4 w-4" />
					</button>
				</div>
				{image && (
					<div className="relative h-64 min-h-[320px] overflow-hidden rounded-sm bg-[#151823] md:h-full">
						<div className="tech-grid absolute inset-0 opacity-20"></div>
						<div className="absolute inset-0">
							<Image src={image} alt={title} fill className="object-cover" priority sizes="[512px]" />
						</div>
					</div>
				)}
			</div>
			<div
				className={`absolute bottom-0 left-0 h-[2px] w-0 ${featured ? 'bg-[#FF6A00]' : 'bg-[#00C9FF]'} transition-all duration-500 group-hover:w-full`}
			></div>
		</div>
	);
};

export default ContentCard;
