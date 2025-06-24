import {
	BotIcon,
	BrainCircuitIcon,
	ChartLineIcon,
	ClockIcon,
	CodeIcon,
	Droplets,
	EyeIcon,
	Globe,
	LayoutGridIcon,
	PenToolIcon,
	RocketIcon,
	SearchIcon,
	Server,
	ShieldCheck,
	SmartphoneIcon,
	Truck,
	ZapIcon,
} from 'lucide-react';

const iconMap = {
	LayoutGrid: LayoutGridIcon,
	Rocket: RocketIcon,
	Bot: BotIcon,
	Search: SearchIcon,
	Code: CodeIcon,
	PenTool: PenToolIcon,
	Smartphone: SmartphoneIcon,
	Zap: ZapIcon,
	ChartLine: ChartLineIcon,
	BrainCircuit: BrainCircuitIcon,
	Clock: ClockIcon,
	Eye: EyeIcon,
	Truck: Truck,
	ShieldCheck: ShieldCheck,
	Droplets: Droplets,
	Globe: Globe,
	Server: Server,
} as const;

export type IconName = keyof typeof iconMap;

export const getIcon = (iconName: string) => {
	return iconMap[iconName as IconName] ?? CodeIcon;
};
