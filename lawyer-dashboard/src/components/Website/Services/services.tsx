import { getServices } from "@/server/web/services/services/services";
import ServicesSection from "./Services-section";
import { Translator } from "google-translate-api-x";




export default async function Services() {
  const services = await getServices();

  const translator = new Translator({ from: 'en', to: 'ar', forceBatch: false});

  const translatedServices = await Promise.all(services.map(async (service: any) => {
    return {
      serviceTitle: await translator.translate(service.serviceTitle),
      serviceDescription: await translator.translate(service.serviceDescription),

    };
  }));
  return (
      <>
          <ServicesSection services={services} translatedServices={translatedServices}/>
      </>
  )
}
