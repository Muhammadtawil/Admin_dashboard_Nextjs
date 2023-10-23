



import PageTitle from "../../../components/shared/PageTitle/pageTitle";
import MainComponent from "../../../components/main/main";
// import MainHome from "@/components/main/MainHome";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/loading spinner/loadinSpinner";

export default async function ClientsPage({ params }: any) {




const MainHome  = dynamic(() => import("../../../components/main/MainHome"), {
  loading: () => <LoadingSpinner />, 
  ssr: false, // Disable server-side rendering for this component
});
  return (
    <>
      <PageTitle title="Dashboard" />
<MainHome/>
     
    </>
  );
}
