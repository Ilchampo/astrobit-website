import React from 'react';

import Image from 'next/image';

interface CompanyIconProps {
	displayName?: boolean;
	size?: 'xs' | 'sm' | 'md' | 'lg';
}

const CompanyIcon: React.FC<CompanyIconProps> = props => {
	const { displayName = false, size = 'md' } = props;

	const getCompanyIconSize = () => {
		switch (size) {
			case 'xs':
				return 16;
			case 'sm':
				return 24;
			case 'md':
				return 48;
			case 'lg':
				return 96;
			default:
				return 48;
		}
	};

	return (
		<div className="flex items-center justify-center gap-2">
			<Image
				src="/images/astrobit-icon.webp"
				alt="Company Icon"
				width={getCompanyIconSize()}
				height={getCompanyIconSize()}
			/>
			{displayName && (
				<span className={`font-orbitron ${size === 'xs' ? 'text-sm' : 'text-xl'} font-bold text-[#EDEDED]`}>
					Astrobit
				</span>
			)}
		</div>
	);
};

export default CompanyIcon;
