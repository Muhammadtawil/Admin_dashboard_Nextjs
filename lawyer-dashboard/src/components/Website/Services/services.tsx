import { getServices } from "@/server/web/services/services/services";
import ServicesSection from "./Services-section";




export default async function Services() {
  const services = await getServices();

  return (
      <>
          <ServicesSection services={services}/>
      </>
  )
}
