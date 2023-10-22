
import dynamic from "next/dynamic";
import PageTitle from "../../../components/shared/PageTitle/pageTitle";

const NewsComponent = dynamic(() => import("../../../components/news/news"), {
  loading: () => <p>Loading...</p>, // Optional loading component
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
