export const smoothScroll = (target: string) => {
	const targetElement = document.querySelector(target);

	if (targetElement) {
		targetElement.scrollIntoView({ behavior: 'smooth' });
	}
};
