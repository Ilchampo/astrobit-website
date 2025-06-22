import type { Differentiator } from '@/lib/interfaces/differentiators.interface';

import DifferentiatorsDecorative from '@/components/common/Decoratives/DifferentiatorsDecorative';
import InfoCard from '@/components/common/InfoCard/InfoCard';
import SectionHeader from '@/components/common/SectionHeader/SectionHeader';

interface DifferentiatorsProps {
	cards: Differentiator[];
}

const Differentiators: React.FC<DifferentiatorsProps> = props => {
	const { cards } = props;

	return (
		<section id="differentiators" className="relative w-full overflow-hidden bg-[#0B0F1A] py-24">
			<DifferentiatorsDecorative />
			<div className="relative container mx-auto px-4">
				<SectionHeader title="Built for Your Mission" />
				<div className="grid gap-8 md:grid-cols-3">
					{cards.map((diff, index) => (
						<InfoCard key={index} {...diff} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Differentiators;
