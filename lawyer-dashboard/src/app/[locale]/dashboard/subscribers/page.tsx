import LoadingSpinner from "@/components/loading spinner/loadinSpinner";
import dynamic from "next/dynamic";



const SubscribersComponent = dynamic(() => import("../../../../components/subscribers/Subscribers"), {
  loading: () => <LoadingSpinner />, 
  ssr: false, // Disable server-side rendering for this component
});
export default function SubscribersPage() {
  return (
      <>

          <SubscribersComponent/>
      </>
  )
}
