



import PageTitle from "../../../../components/dashboard/shared/PageTitle/pageTitle";
import MainComponent from "../../../../components/dashboard/main/main";
// import MainHome from "@/components/main/MainHome";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/dashboard/loading spinner/loadinSpinner";

export default async function ClientsPage({ params }: any) {




const MainHome  = dynamic(() => import("../../../../components/dashboard/main/MainHome"), {
  loading: () => <LoadingSpinner />, 
  ssr: false, // Disable server-side rendering for this component
});
  return (
    <>
<MainHome/>
     
    </>
  );
}
