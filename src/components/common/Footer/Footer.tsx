import CompanyIcon from '@/components/common/CompanyIcon/CompanyIcon';

const Footer = () => {
	return (
		<footer className="border-opacity-20 relative w-full border-t border-[#00C9FF] bg-[#0B0F1A] py-8">
			<div className="tech-grid absolute inset-0 opacity-5"></div>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-2">
						<CompanyIcon size="xs" displayName />
					</div>
					<div className="font-exo2 text-sm text-[#A0A0B2]">
						© {new Date().getFullYear()} Astrobit. All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
