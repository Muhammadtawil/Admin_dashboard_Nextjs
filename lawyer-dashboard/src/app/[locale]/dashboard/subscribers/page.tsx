import LoadingSpinner from "@/components/dashboard/loading spinner/loadinSpinner";
import dynamic from "next/dynamic";



const SubscribersComponent = dynamic(() => import("../../../../components/dashboard/subscribers/Subscribers"), {
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
