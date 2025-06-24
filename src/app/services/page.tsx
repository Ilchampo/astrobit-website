import { PAGE_METADATA, SEO_CONFIG } from '@/lib/constants/seo';
import { SERVICES_AVAILABLE, SERVICE_PROCESS } from '@/lib/constants/services';
import { generateMetadata, generateStructuredData } from '@/lib/utils/seo';

import PageHeader from '@/components/common/PageHeader/PageHeader';
import ServiceProcess from './components/ServiceProcess/ServiceProcess';
import ServicesCard from './components/ServicesCard/ServicesCard';

export const metadata = generateMetadata({
	title: PAGE_METADATA.services.title,
	description: PAGE_METADATA.services.description,
	keywords: PAGE_METADATA.services.keywords,
	url: `${SEO_CONFIG.siteUrl}/services`,
});

export default function ServicesPage() {
	const serviceStructuredData = generateStructuredData('professionalService');

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceStructuredData }} />
			<div className="w-full bg-[#0B0F1A]">
				<PageHeader
					title="Our Services"
					subtitle="From web applications to landing pages and chatbots, we build digital solutions that help you grow."
				/>
				<ServicesCard services={SERVICES_AVAILABLE} />
				<ServiceProcess steps={SERVICE_PROCESS} />
			</div>
		</>
	);
}
