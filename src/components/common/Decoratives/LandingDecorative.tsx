import React from 'react';

const LandingDecorative: React.FC = () => (
	<>
		{/* Starfield background */}
		<div className="starfield absolute inset-0 opacity-30"></div>

		{/* Tech grid overlay */}
		<div className="tech-grid absolute inset-0 opacity-20"></div>

		{/* Orbit circles */}
		<div className="orbit-line absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
		<div className="orbit-line absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
		<div className="orbit-line absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

		{/* Diagonal accent lines */}
		<div className="hero-gradient absolute top-0 right-0 h-1 w-1/3"></div>
		<div className="hero-gradient absolute top-0 right-0 h-1/3 w-1"></div>
		<div className="hero-gradient absolute bottom-0 left-0 h-1 w-1/3"></div>
		<div className="hero-gradient absolute bottom-0 left-0 h-1/3 w-1"></div>

		{/* Spacecraft blueprint visual element */}
		<div className="absolute top-1/2 right-[5%] z-0 h-[60%] w-[35%] -translate-y-1/2 opacity-20">
			<div className="relative h-full w-full">
				{/* Rocket outline */}
				<div className="absolute top-0 left-1/2 h-full w-[2px] bg-[#00C9FF] opacity-70"></div>
				<div className="absolute top-[10%] left-1/2 h-[1px] w-[40%] -translate-x-1/2 bg-[#00C9FF] opacity-70"></div>
				<div className="absolute top-[30%] left-1/2 h-[1px] w-[60%] -translate-x-1/2 bg-[#00C9FF] opacity-70"></div>
				<div className="absolute top-[50%] left-1/2 h-[1px] w-[70%] -translate-x-1/2 bg-[#00C9FF] opacity-70"></div>
				<div className="absolute top-[70%] left-1/2 h-[1px] w-[60%] -translate-x-1/2 bg-[#00C9FF] opacity-70"></div>
				<div className="absolute top-[90%] left-1/2 h-[1px] w-[40%] -translate-x-1/2 bg-[#00C9FF] opacity-70"></div>

				{/* Rocket fins */}
				<div className="clip-polygon absolute top-[70%] left-[30%] h-[15%] w-[20%] border border-[#00C9FF] opacity-70"></div>
				<div className="clip-polygon absolute top-[70%] right-[30%] h-[15%] w-[20%] border border-[#00C9FF] opacity-70"></div>

				{/* Rocket capsule */}
				<div className="absolute top-[15%] left-1/2 h-[20%] w-[30%] -translate-x-1/2 rounded-t-lg border border-[#00C9FF] opacity-70"></div>

				{/* Technical measurements */}
				<div className="absolute top-[20%] left-[10%] h-[1px] w-[20%] bg-[#8F00FF] opacity-70"></div>
				<div className="absolute top-[50%] left-[10%] h-[1px] w-[20%] bg-[#8F00FF] opacity-70"></div>
				<div className="absolute top-[30%] right-[10%] h-[1px] w-[20%] bg-[#8F00FF] opacity-70"></div>
				<div className="absolute top-[60%] right-[10%] h-[1px] w-[20%] bg-[#8F00FF] opacity-70"></div>
			</div>
		</div>

		{/* Dashboard UI elements */}
		<div className="absolute top-6 left-6 h-1 w-32 bg-[#00C9FF] opacity-30"></div>
		<div className="absolute top-6 left-6 h-32 w-1 bg-[#00C9FF] opacity-30"></div>
		<div className="absolute top-6 right-6 h-1 w-32 bg-[#00C9FF] opacity-30"></div>
		<div className="absolute top-6 right-6 h-32 w-1 bg-[#00C9FF] opacity-30"></div>
		<div className="absolute bottom-6 left-6 h-1 w-32 bg-[#00C9FF] opacity-30"></div>
		<div className="absolute bottom-6 left-6 h-32 w-1 bg-[#00C9FF] opacity-30"></div>
		<div className="absolute right-6 bottom-6 h-1 w-32 bg-[#00C9FF] opacity-30"></div>
		<div className="absolute right-6 bottom-6 h-32 w-1 bg-[#00C9FF] opacity-30"></div>

		{/* Decorative tech elements */}
		<div className="clip-polygon absolute top-10 right-10 h-32 w-32 border border-[#00C9FF] opacity-20"></div>
		<div className="clip-polygon absolute bottom-10 left-10 h-24 w-24 border border-[#8F00FF] opacity-20"></div>

		{/* Glowing accent in corner */}
		<div className="absolute top-0 right-0 h-64 w-64 -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#00C9FF] opacity-5 blur-3xl"></div>
		<div className="absolute bottom-0 left-0 h-64 w-64 translate-x-1/3 translate-y-1/2 rounded-full bg-[#8F00FF] opacity-5 blur-3xl"></div>

		{/* Distant planet element */}
		<div className="absolute top-[15%] right-[15%] h-24 w-24 rounded-full bg-gradient-to-br from-[#8F00FF] to-[#00C9FF] opacity-20 blur-sm"></div>
		<div className="absolute top-[15%] right-[15%] h-4 w-32 -translate-y-4 rotate-15 rounded-full bg-[#00C9FF] opacity-10 blur-sm"></div>
	</>
);

export default LandingDecorative;
