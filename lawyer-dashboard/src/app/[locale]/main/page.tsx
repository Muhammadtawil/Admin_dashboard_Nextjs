



import PageTitle from "../../../components/shared/PageTitle/pageTitle";
import MainComponent from "../../../components/main/main";
// import MainHome from "@/components/main/MainHome";
import dynamic from "next/dynamic";

export default async function ClientsPage({ params }: any) {




const MainHome  = dynamic(() => import("../../../components/main/MainHome"), {
  loading: () => <p>Loading...</p>, // Optional loading component
  ssr: false, // Disable server-side rendering for this component
});
  return (
    <>
      <PageTitle title="Dashboard" />
<MainHome/>
     
    </>
  );
}
