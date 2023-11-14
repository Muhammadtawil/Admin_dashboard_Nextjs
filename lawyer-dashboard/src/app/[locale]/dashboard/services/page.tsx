

// import ServicesComponent from "@/components/services/services";
import LoadingSpinner from "@/components/dashboard/loading spinner/loadinSpinner";


import dynamic from "next/dynamic";

const ServicesComponent = dynamic(
  () => import("../../../../components/dashboard/services/services"),
  {
    loading: () => <LoadingSpinner />, 
    ssr: false, // Disable server-side rendering for this component
  }
);

export default function ServicesPage() {
  return (
    <>

      <ServicesComponent />
    </>
  );
}
