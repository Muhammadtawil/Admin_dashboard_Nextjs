// import { getServices } from "@/server/web/services/services/services";
// import { Translator } from "google-translate-api-x";
// import ServiceSelect from "./select_Service";


// export default async function BookServices() {
//     const services = await getServices();
//     const translator = new Translator({ from: 'en', to: 'ar', forceBatch: false});

//     const translatedServices = await Promise.all(services.map(async (service: any) => {
//       return {
//         serviceTitle: await translator.translate(service.serviceTitle),

  
//       };
//     }));
//   return (
//   <ServiceSelect services={services} translated={translatedServices}/>
//   )
// }
