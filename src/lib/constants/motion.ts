export const HERO_ENTRANCE = {
	container: {
		opacity: [0, 1],
		y: [20, 0],
		duration: 1,
		easing: 'ease-out',
		delay: 0.2,
	},
	title: {
		opacity: [0, 1],
		y: [30, 0],
		duration: 1,
		easing: 'ease-out',
		delay: 0.5,
	},
	subtitle: {
		opacity: [0, 1],
		y: [30, 0],
		duration: 1,
		easing: 'ease-out',
		delay: 0.8,
	},
	cta: {
		opacity: [0, 1],
		y: [30, 0],
		duration: 1,
		easing: 'ease-out',
		delay: 1.1,
	},
	techIndicator: {
		opacity: [0, 1],
		y: [20, 0],
		duration: 0.8,
		easing: 'ease-out',
		delay: 1.4,
	},
};

export const SCROLL_FADE_UP = {
	opacity: [0, 1],
	y: [30, 0],
	duration: 0.8,
	easing: 'ease-out',
};

export const SCROLL_FADE_UP_DELAYED = {
	opacity: [0, 1],
	y: [40, 0],
	duration: 0.6,
	delay: 0.2,
	easing: 'ease-out',
};

export const CARD_STAGGER = {
	container: {
		opacity: [0, 1],
		duration: 0.6,
	},
	item: {
		opacity: [0, 1],
		y: [20, 0],
		duration: 0.6,
		easing: 'ease-out',
	},
};

export const CARD_HOVER = {
	y: [0, -8],
	scale: [1, 1.02],
	duration: 0.3,
	easing: 'ease-out',
};

export const CARD_HOVER_RESET = {
	y: [-8, 0],
	scale: [1.02, 1],
	duration: 0.3,
	easing: 'ease-out',
};

export const BUTTON_HOVER = {
	scale: [1, 1.05],
	duration: 0.2,
	easing: 'ease-out',
};

export const BUTTON_HOVER_RESET = {
	scale: [1.05, 1],
	duration: 0.2,
	easing: 'ease-out',
};

export const SECTION_HEADER = {
	title: {
		opacity: [0, 1],
		y: [30, 0],
		duration: 0.8,
		easing: 'ease-out',
	},
	description: {
		opacity: [0, 1],
		y: [20, 0],
		duration: 0.6,
		delay: 0.2,
		easing: 'ease-out',
	},
};

export const TECH_PULSE = {
	scale: [1, 1.2, 1],
	opacity: [0.7, 1, 0.7],
	duration: 2,
	easing: 'ease-in-out',
	repeat: Infinity,
};

export const GRADIENT_SLIDE = {
	x: ['-100%', '100%'],
	duration: 2,
	repeat: Infinity,
	easing: 'ease-in-out',
};

export const SCROLL_TRIGGER_OPTIONS = {
	threshold: 0.3,
	rootMargin: '0px 0px -20px 0px',
};

export const CONSERVATIVE_SCROLL_TRIGGER_OPTIONS = {
	threshold: 0.5,
	rootMargin: '0px',
};

export const STEPPER_FADE_UP = {
	opacity: [0, 1],
	y: [40, 0],
	duration: 0.8,
	delay: 0.2,
	easing: 'ease-out',
};

export const STAGGER_DELAYS = {
	fast: 0.1,
	medium: 0.15,
	slow: 0.2,
};

export const SUB_PAGE_HEADER_ENTRANCE = {
	container: {
		opacity: [0, 1],
		y: [20, 0],
		duration: 0.8,
		easing: 'ease-out',
		delay: 0.1,
	},
	breadcrumb: {
		opacity: [0, 1],
		y: [20, 0],
		duration: 0.6,
		easing: 'ease-out',
		delay: 0.2,
	},
	title: {
		opacity: [0, 1],
		y: [30, 0],
		duration: 0.8,
		easing: 'ease-out',
		delay: 0.4,
	},
	subtitle: {
		opacity: [0, 1],
		y: [20, 0],
		duration: 0.8,
		easing: 'ease-out',
		delay: 0.6,
	},
	techIndicator: {
		opacity: [0, 1],
		y: [15, 0],
		duration: 0.6,
		easing: 'ease-out',
		delay: 0.8,
	},
};

export const PAGE_HEADER_ENTRANCE = {
	container: {
		opacity: [0, 1],
		y: [20, 0],
		duration: 0.8,
		easing: 'ease-out',
		delay: 0.1,
	},
	title: {
		opacity: [0, 1],
		y: [30, 0],
		duration: 0.8,
		easing: 'ease-out',
		delay: 0.3,
	},
	subtitle: {
		opacity: [0, 1],
		y: [20, 0],
		duration: 0.8,
		easing: 'ease-out',
		delay: 0.5,
	},
	button: {
		opacity: [0, 1],
		y: [20, 0],
		duration: 0.6,
		easing: 'ease-out',
		delay: 0.7,
	},
	techIndicator: {
		opacity: [0, 1],
		y: [15, 0],
		duration: 0.6,
		easing: 'ease-out',
		delay: 0.9,
	},
};
