import { getServices } from "@/server/web/services/services/services";
import ServicesSection from "./Services-section";
import { Translator } from "google-translate-api-x";




export default async function Services() {
  const services = await getServices();

  const translator = new Translator({ from: 'en', to: 'ar', forceBatch: false});

  const translatedServices = await Promise.all(
    services.map(async (service: any) => {
      const translatedTitle = await translator.translate(service.serviceTitle);
      const translatedDescription = await translator.translate(service.serviceDescription);

      // Ensure that the translated properties are plain strings
      const plainTranslatedService = {
        ...service,
        serviceTitle: translatedTitle ,
        serviceDescription: translatedDescription,
      };

      return plainTranslatedService;
    })
  );

  // Convert serviceTitle and serviceDescription to strings
  const servicesWithStrings = translatedServices.map((service: any) => ({
    ...service,
    serviceTitle: String(service.serviceTitle.text),
    serviceDescription: String(service.serviceDescription.text),
  }));

  return (
      <>
          <ServicesSection services={services} translatedServices={servicesWithStrings}/>
      </>
  )
}