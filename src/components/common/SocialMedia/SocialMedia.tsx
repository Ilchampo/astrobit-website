import { InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const SocialMedia = () => (
	<div className="mt-12 flex items-center justify-center gap-6">
		<a
			href="https://linkedin.com"
			target="_blank"
			rel="noopener noreferrer"
			className="text-[#00C9FF] transition-colors duration-300 hover:text-[#FF6A00]"
		>
			<LinkedinIcon className="h-6 w-6" />
		</a>
		<a
			href="https://linkedin.com"
			target="_blank"
			rel="noopener noreferrer"
			className="text-[#00C9FF] transition-colors duration-300 hover:text-[#FF6A00]"
		>
			<InstagramIcon className="h-6 w-6" />
		</a>
		<a
			href="https://linkedin.com"
			target="_blank"
			rel="noopener noreferrer"
			className="text-[#00C9FF] transition-colors duration-300 hover:text-[#FF6A00]"
		>
			<TwitterIcon className="h-6 w-6" />
		</a>
	</div>
);

export default SocialMedia;
