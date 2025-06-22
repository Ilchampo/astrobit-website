import type { Differentiator } from '@/lib/interfaces/differentiators.interface';

import { CodeIcon, EyeIcon, ZapIcon } from 'lucide-react';

export const DIFFERENTIATORS: Differentiator[] = [
	{
		icon: ZapIcon,
		title: 'Speed',
		description: 'Launch faster with focused, efficient development.',
	},
	{
		icon: EyeIcon,
		title: 'Clarity',
		description: 'Clear communication and transparent process from start to finish.',
	},
	{
		icon: CodeIcon,
		title: 'Custom Code',
		description: 'Tailored, scalable solutions — no bloated templates or shortcuts.',
	},
];
