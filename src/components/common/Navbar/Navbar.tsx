'use client';

import React from 'react';

import { smoothScroll } from '@/lib/utils/smoothScroll';
import { MenuIcon, XIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import CompanyIcon from '@/components/common/CompanyIcon/CompanyIcon';

type NavbarItem = {
	label: string;
	href: string;
};

interface NavbarProps {
	items: NavbarItem[];
}

const SCROLL_THRESHOLD = 20;

const Navbar: React.FC<NavbarProps> = props => {
	const { items } = props;

	const router = useRouter();

	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	const handleMenuToggle = (): void => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleNavigation = (path: string): void => {
		setIsMenuOpen(false);
		router.push(path);
	};

	const handleContactMobile = (): void => {
		setIsMenuOpen(false);
		smoothScroll('#contact');
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [isScrolled]);

	const renderDesktopMenu = (): React.ReactNode => (
		<div className="hidden items-center gap-8 md:flex">
			{items.map(item => (
				<button
					key={item.label}
					onClick={() => handleNavigation(item.href)}
					className="font-orbitron group relative cursor-pointer text-sm tracking-wider text-[#EDEDED] transition-colors hover:text-[#00C9FF]"
					aria-label={`Navigate to ${item.label}`}
					type="button"
				>
					{item.label}
					<div className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#00C9FF] opacity-0 transition-all group-hover:w-full group-hover:opacity-100"></div>
				</button>
			))}
			<button
				onClick={() => smoothScroll('#contact')}
				className="font-orbitron tech-button cursor-pointer bg-[#FF6A00] px-6 py-2 text-sm tracking-wider text-[#EDEDED] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,106,0,0.3)]"
				aria-label="Navigate to contact form"
				type="button"
			>
				LET&apos;S TALK
			</button>
		</div>
	);

	const renderMobileMenu = (): React.ReactNode => (
		<div
			className={`overflow-hidden transition-all duration-300 md:hidden ${isMenuOpen ? 'max-h-[300px]' : 'max-h-0'}`}
		>
			<div className="flex flex-col space-y-4 py-4">
				{items.map(item => (
					<button
						key={item.label}
						onClick={() => handleNavigation(item.href)}
						className="font-orbitron group relative cursor-pointer text-sm tracking-wider text-[#EDEDED] transition-colors hover:text-[#00C9FF]"
						aria-label={`Navigate to ${item.label}`}
						type="button"
					>
						{item.label}
						<div className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#00C9FF] opacity-0 transition-all group-hover:w-full group-hover:opacity-100"></div>
					</button>
				))}
				<button
					onClick={() => handleContactMobile()}
					className="font-orbitron tech-button w-full cursor-pointer bg-[#FF6A00] px-6 py-2 text-sm tracking-wider text-[#EDEDED] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,106,0,0.3)]"
					aria-label="Navigate to contact form"
					type="button"
				>
					LET&apos;S TALK
				</button>
			</div>
		</div>
	);

	return (
		<nav
			className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 md:bg-transparent ${isScrolled ? 'bg-[#0B0F1A]/90 backdrop-blur-md' : 'bg-[#0B0F1A]/90 backdrop-blur-md md:bg-transparent md:backdrop-blur-none'}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex h-20 items-center justify-between">
					<button
						onClick={() => handleNavigation('/')}
						className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80"
						aria-label="Navigate to home page"
						type="button"
					>
						<CompanyIcon size="sm" displayName />
					</button>
					{renderDesktopMenu()}
					<button
						onClick={handleMenuToggle}
						className="text-[#EDEDED] transition-colors hover:text-[#00C9FF] md:hidden"
						aria-label="Toggle navigation menu"
						type="button"
					>
						{isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
					</button>
				</div>
				{renderMobileMenu()}
			</div>
		</nav>
	);
};

export default Navbar;
