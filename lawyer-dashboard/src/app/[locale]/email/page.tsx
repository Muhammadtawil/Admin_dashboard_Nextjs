
import dynamic from "next/dynamic";
import PageTitle from "../../../components/shared/PageTitle/pageTitle";



const EmailComponent = dynamic(() => import("../../../components/Email/email"), {
  loading: () => <p>Loading...</p>, // Optional loading component
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
