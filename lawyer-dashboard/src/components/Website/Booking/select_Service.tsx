// "use client"
// import { getServices } from "@/server/web/services/services/services";
// import { usePathname } from "next/navigation";

// const ServiceSelect = ({ services, translated }: { services: any, translated: any }) => {
//   const path = usePathname()
//   const arabic=path.includes('ar')
// const servicesData=arabic?translated:services
//   return (
//     <select
//       className="form-select bg-light border-0"
//       name="clientService"
//       style={{ height: "55px", color: "black" }}
//     >
//       <option value="">Select A Service</option>
//       {services.length === 0 ? (
//         <option value="" disabled>
//           Loading...
//         </option>
//       ) : (
//         services.map((service: any, index: any) => (
//           <option key={index} value={service.serviceTitle}>
//             {arabic?service.serviceTitle.text:service.serviceTitle}
//           </option>
//         ))
//       )}
//     </select>
//   );
// };

// export default ServiceSelect;
