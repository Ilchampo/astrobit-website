import React from 'react';

import { usePathname, useRouter } from 'next/navigation';

const BreadCrumb: React.FC = () => {
	const pathname = usePathname();
	const router = useRouter();

	const pathSegments = pathname.split('/').filter(Boolean);
	const currentPage = pathSegments[pathSegments.length - 1];
	const previousPage = pathSegments[pathSegments.length - 2];

	const formatText = (text: string): string => text.replace(/-/g, ' ').toLowerCase();

	const handleClick = (): void => {
		router.push(`/${previousPage}`);
	};

	return (
		<div className="font-exo2 mb-8 flex items-center justify-center gap-2 text-sm capitalize">
			<button onClick={handleClick} className="text-[#A0A0B2] capitalize transition-colors hover:text-[#00C9FF]">
				{formatText(previousPage)}
			</button>
			<span className="text-[#A0A0B2]">/</span>
			<span className="text-[#EDEDED]">{formatText(currentPage)}</span>
		</div>
	);
};

export default BreadCrumb;
