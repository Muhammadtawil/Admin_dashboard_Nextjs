
import dynamic from "next/dynamic";
import PageTitle from "../../../components/shared/PageTitle/pageTitle";
import LoadingSpinner from "@/components/loading spinner/loadinSpinner";



const EmailComponent = dynamic(() => import("../../../components/Email/email"), {
  loading: () => <LoadingSpinner />, 
  ssr: false, // Disable server-side rendering for this component
});


export default function Inbox() {
  return (
    <>
      {/* Page title */}
      <PageTitle title="Email"/>
       

          <EmailComponent />
 
   
    </>
  );
}
