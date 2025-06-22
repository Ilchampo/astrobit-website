'use client';

import { useState } from 'react';

import FormDecorative from '@/components/common/Decoratives/FormDecorative';
import ModalWrapper from '@/components/common/ModalWrapper/ModalWrapper';
import SectionHeader from '@/components/common/SectionHeader/SectionHeader';
import SocialMedia from '@/components/common/SocialMedia/SocialMedia';
import PrivacyTerms from '@/components/PrivacyTerms/PrivacyTerms';

type ContactForm = {
	name: string;
	email: string;
	company: string;
	interest: string;
	message: string;
};

const INITIAL_STATE: ContactForm = {
	name: '',
	email: '',
	company: '',
	interest: '',
	message: '',
};

const ContactForm = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const [formData, setFormData] = useState<ContactForm>(INITIAL_STATE);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
	};
	return (
		<section id="contact" className="relative w-full overflow-hidden bg-[#0B0F1A] py-24">
			<FormDecorative />
			<div className="relative container mx-auto px-4">
				<SectionHeader
					title="Let's Talk"
					description="Tell us about your idea — we'll help you turn it into a real product."
				/>
				<div className="mx-auto max-w-2xl">
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid gap-6 md:grid-cols-2">
							{/* Name Input */}
							<div className="relative">
								<input
									required
									type="text"
									placeholder="Full Name"
									className="font-exo2 w-full border border-[#00C9FF]/20 bg-[#151823] p-3 text-[#EDEDED] transition-all duration-300 focus:border-[#00C9FF] focus:shadow-[0_0_15px_rgba(0,201,255,0.3)] focus:outline-none"
									onChange={e =>
										setFormData({
											...formData,
											name: e.target.value,
										})
									}
								/>
								<div className="absolute top-0 right-0 h-6 w-6 border-t border-r border-[#00C9FF]/20"></div>
							</div>
							{/* Email Input */}
							<div className="relative">
								<input
									required
									type="email"
									placeholder="Email"
									className="font-exo2 w-full border border-[#00C9FF]/20 bg-[#151823] p-3 text-[#EDEDED] transition-all duration-300 focus:border-[#00C9FF] focus:shadow-[0_0_15px_rgba(0,201,255,0.3)] focus:outline-none"
									onChange={e =>
										setFormData({
											...formData,
											email: e.target.value,
										})
									}
								/>
								<div className="absolute top-0 right-0 h-6 w-6 border-t border-r border-[#00C9FF]/20"></div>
							</div>
						</div>
						{/* Company Input */}
						<div className="relative">
							<input
								type="text"
								placeholder="Company / Project Name (optional)"
								className="border-opacity-20 font-exo2 w-full border border-[#00C9FF]/20 bg-[#151823] p-3 text-[#EDEDED] transition-all duration-300 focus:border-[#00C9FF] focus:shadow-[0_0_15px_rgba(0,201,255,0.3)] focus:outline-none"
								onChange={e =>
									setFormData({
										...formData,
										company: e.target.value,
									})
								}
							/>
							<div className="border-opacity-20 absolute top-0 right-0 h-6 w-6 border-t border-r border-[#00C9FF]/20"></div>
						</div>
						{/* Interest Dropdown */}
						<div className="relative">
							<select
								className={`border-opacity-20 font-exo2 w-full appearance-none border border-[#00C9FF]/20 bg-[#151823] p-3 transition-all duration-300 focus:border-[#00C9FF] focus:shadow-[0_0_15px_rgba(0,201,255,0.3)] focus:outline-none ${
									formData.interest ? 'text-[#EDEDED]' : 'text-[#EDEDED]/50'
								}`}
								onChange={e =>
									setFormData({
										...formData,
										interest: e.target.value,
									})
								}
								value={formData.interest}
							>
								<option value="" disabled>
									What are you interested in? (optional)
								</option>
								<option value="web">Web Application</option>
								<option value="landing">Landing Page</option>
								<option value="chatbot">Chatbot</option>
								<option value="unsure">I&apos;m not sure yet</option>
							</select>
							<div className="border-opacity-20 absolute top-0 right-0 h-6 w-6 border-t border-r border-[#00C9FF]/20"></div>
						</div>
						{/* Message Textarea */}
						<div className="relative">
							<textarea
								placeholder="Tell us about your idea"
								rows={5}
								className="border-opacity-20 font-exo2 w-full border border-[#00C9FF]/20 bg-[#151823] p-3 text-[#EDEDED] transition-all duration-300 focus:border-[#00C9FF] focus:shadow-[0_0_15px_rgba(0,201,255,0.3)] focus:outline-none"
								onChange={e =>
									setFormData({
										...formData,
										message: e.target.value,
									})
								}
							></textarea>
							<div className="border-opacity-20 absolute top-0 right-0 h-6 w-6 border-t border-r border-[#00C9FF]/20"></div>
						</div>
						{/* Submit Button */}
						<div className="space-y-4">
							<p className="font-exo2 text-center text-xs text-[#A0A0B2]">
								By clicking &quot;Launch Project&quot;, you agree to our{' '}
								<button
									type="button"
									onClick={() => setIsModalOpen(true)}
									className="text-[#00C9FF] underline transition-colors duration-300 hover:text-[#FF6A00]"
								>
									Terms and Privacy Policy
								</button>
							</p>
							<button
								type="submit"
								className="font-orbitron tech-button w-full bg-[#FF6A00] px-12 py-4 tracking-wider text-[#EDEDED] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,106,0,0.3)] md:w-auto"
							>
								Launch Project
							</button>
						</div>
					</form>
					<SocialMedia />
				</div>
			</div>
			<ModalWrapper title="Terms and Privacy Policy" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<PrivacyTerms />
			</ModalWrapper>
		</section>
	);
};

export default ContactForm;
