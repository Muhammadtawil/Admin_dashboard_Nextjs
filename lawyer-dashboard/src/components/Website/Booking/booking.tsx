
import { getServices } from '@/server/web/services/services/services';
import MakeYourBooking from './MakeYourBooking';
import AddClient from '@/server/web/services/booking/booking';


async function onCreate(formData: FormData) {
    "use server";
    try {
      await AddClient(formData);
     
    } catch (error) {}
  }
export default async function Booking() {
  const services = await getServices();

  return (
      <>
      <MakeYourBooking onCreate={onCreate} services={services}/>
      </>
  )
}
