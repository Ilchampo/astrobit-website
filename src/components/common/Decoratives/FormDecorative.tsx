const FormDecorative = () => (
	<>
		{/* Background Elements */}
		<div className="tech-grid absolute inset-0 opacity-10"></div>
		<div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#00C9FF] opacity-5 blur-3xl"></div>
		<div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#8F00FF] opacity-5 blur-3xl"></div>

		{/* Tech Lines */}
		<div className="absolute top-0 left-0 h-[1px] w-1/4 bg-[#00C9FF] opacity-20"></div>
		<div className="absolute right-0 bottom-0 h-[1px] w-1/4 bg-[#00C9FF] opacity-20"></div>
	</>
);

export default FormDecorative;
