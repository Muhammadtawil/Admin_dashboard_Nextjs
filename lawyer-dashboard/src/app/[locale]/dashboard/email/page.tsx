
import dynamic from "next/dynamic";

import LoadingSpinner from "@/components/dashboard/loading spinner/loadinSpinner";



const EmailComponent = dynamic(() => import("../../../../components/dashboard/Email/email"), {
  loading: () => <LoadingSpinner />, 
  ssr: false, // Disable server-side rendering for this component
});


export default function Inbox() {
  return (
    <>

       

          <EmailComponent />
 
   
    </>
  );
}
