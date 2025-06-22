import React from 'react';

interface CompanyLogoProps {
	children: React.ReactNode;
	className?: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = props => {
	const { children, className } = props;

	return (
		<div className={`h-12 w-12 rounded border-2 border-white opacity-70 ${className}`}>
			<div className="flex h-full w-full items-center justify-center">{children}</div>
		</div>
	);
};

export default CompanyLogo;
