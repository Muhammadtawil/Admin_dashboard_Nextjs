
import { getServices } from '@/server/web/services/services/services';
import MakeYourBooking from './MakeYourBooking';
import AddClient from '@/server/web/services/booking/booking';
import { Translator } from 'google-translate-api-x';


async function onCreate(formData: FormData) {
    "use server";
    try {
      await AddClient(formData);
     
    } catch (error) {}
  }
export default async function Booking() {
  const services = await getServices();
  const translator = new Translator({ from: 'ar', to: 'en', forceBatch: false});

  const translatedServices = await Promise.all(services.map(async (service: any) => {
    const translatedTitle = await translator.translate(service.serviceTitle);
    const plainTranslatedService = {
      ...service,
      serviceTitle: translatedTitle ,
    }
    return plainTranslatedService;
  }));
  const servicesWithStrings = translatedServices.map((service: any) => ({
    ...service,
    serviceTitle: String(service.serviceTitle.text),
  
  }));
  return (
      <>
      <MakeYourBooking onCreate={onCreate} services={services} translatedServices={servicesWithStrings}/>
      </>
  )
}
