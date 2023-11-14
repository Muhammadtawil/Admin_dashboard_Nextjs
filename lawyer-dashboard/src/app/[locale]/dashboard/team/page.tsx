
import LoadingSpinner from "@/components/dashboard/loading spinner/loadinSpinner";
import dynamic from "next/dynamic";

const TeamsComponent = dynamic(() => import("../../../../components/dashboard/team/Teams"), {
  loading: () => <LoadingSpinner />, 
  ssr: false, // Disable server-side rendering for this component
});

export default  function TeamPage({ params: { lang } }:any) {
  return (
    <>


      <TeamsComponent />
    </>
  );
}
