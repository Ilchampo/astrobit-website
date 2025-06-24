import React from 'react';

const PageHeaderDecorative: React.FC = () => (
	<>
		{/* Tech grid background */}
		<div className="tech-grid absolute inset-0 opacity-10"></div>

		{/* Distant planet elements */}
		<div className="absolute top-[15%] right-[15%] h-24 w-24 rounded-full bg-gradient-to-br from-[#8F00FF] to-[#00C9FF] opacity-20 blur-sm"></div>
		<div className="absolute top-[15%] right-[15%] h-4 w-32 -translate-y-4 rotate-15 rounded-full bg-[#00C9FF] opacity-10 blur-sm"></div>
		<div className="absolute bottom-[20%] left-[10%] h-16 w-16 rounded-full bg-gradient-to-tl from-[#FF6A00] to-[#8F00FF] opacity-20 blur-sm"></div>
		<div className="absolute bottom-[20%] left-[10%] h-3 w-24 translate-y-2 -rotate-15 rounded-full bg-[#FF6A00] opacity-10 blur-sm"></div>

		{/* Glowing orbs */}
		<div className="absolute top-20 right-20 h-[400px] w-[400px] rounded-full bg-[#00C9FF] opacity-[0.03] blur-[100px]"></div>
		<div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#8F00FF] opacity-[0.03] blur-[100px]"></div>
		<div className="absolute top-1/2 left-1/4 h-[200px] w-[200px] rounded-full bg-[#FF6A00] opacity-[0.02] blur-[100px]"></div>

		{/* Circuit lines */}
		<div className="absolute top-0 left-[20%] h-32 w-[1px] bg-gradient-to-b from-transparent via-[#00C9FF] to-transparent opacity-30"></div>
		<div className="absolute right-[30%] bottom-0 h-48 w-[1px] bg-gradient-to-t from-transparent via-[#8F00FF] to-transparent opacity-30"></div>
		<div className="absolute top-[40%] right-0 h-[1px] w-64 bg-gradient-to-r from-transparent via-[#00C9FF] to-transparent opacity-30"></div>

		{/* Tech data points */}
		<div className="absolute top-[30%] left-[10%] h-2 w-2 animate-ping bg-[#00C9FF] opacity-40"></div>
		<div className="absolute right-[20%] bottom-[40%] h-2 w-2 animate-ping bg-[#8F00FF] opacity-40 delay-150"></div>

		{/* Corner accents */}
		<div className="absolute top-0 right-0 h-24 w-24">
			<div className="absolute top-0 right-0 h-[2px] w-full bg-gradient-to-l from-[#00C9FF] to-transparent"></div>
			<div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-[#00C9FF] to-transparent"></div>
		</div>
		<div className="absolute bottom-0 left-0 h-24 w-24">
			<div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#00C9FF] to-transparent"></div>
			<div className="absolute bottom-0 left-0 h-full w-[2px] bg-gradient-to-t from-[#00C9FF] to-transparent"></div>
		</div>
	</>
);

export default PageHeaderDecorative;
