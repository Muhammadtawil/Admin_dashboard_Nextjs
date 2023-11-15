import { getServices } from "@/server/web/services/services/services";
import ServicesSection from "./Services-section";
import { Translator } from "google-translate-api-x";




export default async function Services() {
  const services = await getServices();

  // const translatorToArabic = new Translator({ from: 'en', to: 'ar', forceBatch: false });
  const translatorToEnglish = new Translator({ from: 'ar', to: 'en', forceBatch: false});
  

  const EnglishtranslatedServices = await Promise.all(
    services.map(async (service: any) => {
      const translatedTitle = await translatorToEnglish.translate(service.serviceTitle);
      const translatedDescription = await translatorToEnglish.translate(service.serviceDescription);
 

      // Ensure that the translated properties are plain strings
      const plainTranslatedService = {
        ...service,
        serviceTitle: translatedTitle ,
        serviceDescription: translatedDescription,
      };

      return plainTranslatedService;
    })
  );
  const EnglishServicesWithStrings = EnglishtranslatedServices.map((service: any) => ({
    ...service,
    serviceTitle: String(service.serviceTitle.text),
    serviceDescription: String(service.serviceDescription.text),
    
  }));
  return (
      <>
          <ServicesSection services={services} translatedServices={EnglishServicesWithStrings}/>
      </>
  )
}

// 
// 
     
// const translatedAuthor=  await translatorToArabic.translate(auth)