'use client';

import { SERVICES_AVAILABLE, SERVICE_PROCESS } from '@/lib/constants/services';

import PageHeader from '@/components/common/PageHeader/PageHeader';
import ServiceProcess from './components/ServiceProcess/ServiceProcess';
import ServicesCard from './components/ServicesCard/ServicesCard';

export default function Home() {
	return (
		<div className="w-full bg-[#0B0F1A]">
			<PageHeader
				title="Our Services"
				subtitle="From web applications to landing pages and chatbots, we build digital solutions that help you grow."
			/>
			<ServicesCard services={SERVICES_AVAILABLE} />
			<ServiceProcess steps={SERVICE_PROCESS} />
		</div>
	);
}
