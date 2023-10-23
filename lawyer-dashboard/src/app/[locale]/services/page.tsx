

// import ServicesComponent from "@/components/services/services";
import LoadingSpinner from "@/components/loading spinner/loadinSpinner";
import PageTitle from "../../../components/shared/PageTitle/pageTitle";

import dynamic from "next/dynamic";

const ServicesComponent = dynamic(
  () => import("../../../components/services/services"),
  {
    loading: () => <LoadingSpinner />, 
    ssr: false, // Disable server-side rendering for this component
  }
);

export default function ServicesPage() {
  return (
    <>
      <PageTitle title="Services" />
      <ServicesComponent />
    </>
  );
}
