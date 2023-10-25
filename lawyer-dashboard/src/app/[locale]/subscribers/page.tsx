import LoadingSpinner from "@/components/loading spinner/loadinSpinner";
import PageTitle from "@/components/shared/PageTitle/pageTitle";
import dynamic from "next/dynamic";



const SubscribersComponent = dynamic(() => import("../../../components/subscribers/Subscribers"), {
  loading: () => <LoadingSpinner />, 
  ssr: false, // Disable server-side rendering for this component
});
export default function SubscribersPage() {
  return (
      <>
          {/* <PageTitle title="Subscribers" /> */}
          <SubscribersComponent/>
      </>
  )
}
