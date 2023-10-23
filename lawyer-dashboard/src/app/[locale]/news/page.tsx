
import dynamic from "next/dynamic";
import PageTitle from "../../../components/shared/PageTitle/pageTitle";
import LoadingSpinner from "@/components/loading spinner/loadinSpinner";

const NewsComponent = dynamic(() => import("../../../components/news/news"), {
  loading: () => <LoadingSpinner />, 
  ssr: false, // Disable server-side rendering for this component
});
export default function BlogPage({ params }: any) {


  return (
    <>
      <PageTitle title="News" />
      <NewsComponent />
    </>
  );
}
