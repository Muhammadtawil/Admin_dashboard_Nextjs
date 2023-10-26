
import dynamic from "next/dynamic";

import LoadingSpinner from "@/components/loading spinner/loadinSpinner";



const EmailComponent = dynamic(() => import("../../../components/Email/email"), {
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
