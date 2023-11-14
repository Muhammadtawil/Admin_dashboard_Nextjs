// import ClientsComponentList from "@/components/clients/clients";

import LoadingSpinner from "@/components/dashboard/loading spinner/loadinSpinner";
import dynamic from "next/dynamic";
// Use dynamic import to load BlogsComponent lazily
const ClientsComponent = dynamic(() => import("../../../../components/dashboard/clients/clients"), {
  loading: () => <LoadingSpinner />, 
  ssr: false, // Disable server-side rendering for this component
});

export default function ClientsPage() {
  return (
    <>
 

      <ClientsComponent />
    </>
  );
}
