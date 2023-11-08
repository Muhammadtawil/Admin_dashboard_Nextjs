
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
  const translator = new Translator({ from: 'en', to: 'ar', forceBatch: false});

  const translatedServices = await Promise.all(services.map(async (service: any) => {
    return {
      serviceTitle: await translator.translate(service.serviceTitle),


    };
  }));
  return (
      <>
      <MakeYourBooking onCreate={onCreate} services={services} translatedServices={translatedServices}/>
      </>
  )
}
