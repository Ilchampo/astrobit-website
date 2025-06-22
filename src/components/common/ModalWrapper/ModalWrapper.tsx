import React from 'react';

import { XIcon } from 'lucide-react';

interface ModalProps {
	title: string;
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const ModalWrapper: React.FC<ModalProps> = props => {
	const { title, isOpen, onClose, children } = props;
	return isOpen ? (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
			<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
			<div className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto border border-[#00C9FF]/20 bg-[#0B0F1A]">
				<div className="sticky top-0 flex items-center justify-between border-b border-[#00C9FF]/20 bg-[#0B0F1A] p-4">
					<h3 className="font-orbitron text-xl text-[#EDEDED]">{title}</h3>
					<button onClick={onClose} className="text-[#A0A0B2] transition-colors hover:text-[#00C9FF]">
						<XIcon className="h-6 w-6" />
					</button>
				</div>
				<div className="font-exo2 space-y-6 p-6 text-[#A0A0B2]">{children}</div>
			</div>
		</div>
	) : null;
};

export default ModalWrapper;
