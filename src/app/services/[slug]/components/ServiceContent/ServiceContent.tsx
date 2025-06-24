import type { Service } from '@/lib/interfaces/services.interface';

import { CASE_STUDIES_DETAILS } from '@/lib/constants/caseStudies';

import SubPageHeader from '@/components/common/SubPageHeader/SubPageHeader';
import BenefitsSection from '../BenefitsSection/BenefitsSection';
import CaseStudySection from '../CaseStudySection/CaseStudySection';
import DescriptionSection from '../DescriptionSection/DescriptionSection';
import ProcessSection from '../ProcessSection/ProcressSection';

interface ServiceContentProps {
	service: Service;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ service }) => {
	const caseStudies = CASE_STUDIES_DETAILS.filter(study => service.caseStudiesIds?.includes(study.slug));

	return (
		<div className="w-full bg-[#0B0F1A]">
			<SubPageHeader title={service.title} subtitle={service.subtitle} />
			<DescriptionSection description={service.description} />
			<BenefitsSection title="Key Benefits" benefits={service.benefits} />
			<ProcessSection title="How We Build It" steps={service.steps} />
			<CaseStudySection caseStudies={caseStudies} />
		</div>
	);
};

export default ServiceContent;
