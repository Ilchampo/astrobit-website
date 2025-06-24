import React from 'react';

const ServicesDecorative: React.FC = () => (
	<>
		{/* Background Elements */}
		<div className="tech-grid absolute inset-0 opacity-10"></div>

		{/* Tech Lines */}
		<div className="absolute top-0 left-0 h-[1px] w-1/4 bg-[#00C9FF] opacity-20"></div>
		<div className="absolute right-0 bottom-0 h-[1px] w-1/4 bg-[#00C9FF] opacity-20"></div>
	</>
);

export default ServicesDecorative;
