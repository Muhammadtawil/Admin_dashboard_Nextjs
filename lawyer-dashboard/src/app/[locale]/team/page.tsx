
import PageTitle from "../../../components/shared/PageTitle/pageTitle";
import dynamic from "next/dynamic";

const TeamsComponent = dynamic(() => import("../../../components/team/Teams"), {
  loading: () => <p>Loading...</p>, // Optional loading component
  ssr: false, // Disable server-side rendering for this component
});

export default  function TeamPage({ params: { lang } }:any) {
  return (
    <>
      <PageTitle title="Team" />

      <TeamsComponent />
    </>
  );
}
