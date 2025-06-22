import React from 'react';

const SubPageHeaderDecorative: React.FC = () => (
	<>
		{/* Starfield background */}
		<div className="starfield absolute inset-0 opacity-30"></div>

		{/* Tech grid overlay */}
		<div className="tech-grid absolute inset-0 opacity-20"></div>

		{/* Orbit circles */}
		<div className="orbit-line absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
		<div className="orbit-line absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

		{/* Diagonal accent lines */}
		<div className="hero-gradient absolute top-0 right-0 h-1 w-1/3"></div>
		<div className="hero-gradient absolute top-0 right-0 h-1/3 w-1"></div>
		<div className="hero-gradient absolute bottom-0 left-0 h-1 w-1/3"></div>
		<div className="hero-gradient absolute bottom-0 left-0 h-1/3 w-1"></div>

		{/* Glowing accents */}
		<div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#00C9FF] opacity-5 blur-3xl"></div>
		<div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#8F00FF] opacity-5 blur-3xl"></div>
	</>
);

export default SubPageHeaderDecorative;
