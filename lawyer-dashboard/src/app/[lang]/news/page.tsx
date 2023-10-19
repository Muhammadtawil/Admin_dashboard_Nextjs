
import dynamic from "next/dynamic";
import { getDictionary } from "../../../getDictionary";
import PageTitle from "../../../components/shared/PageTitle/pageTitle";

const NewsComponent = dynamic(() => import("../../../components/news/news"), {
  loading: () => <p>Loading...</p>, // Optional loading component
  ssr: false, // Disable server-side rendering for this component
});
export default async function BlogPage({ params }: any) {
const lang = await getDictionary(params.lang);

  return (
    <>
      <PageTitle title="News" />
      <NewsComponent />
    </>
  );
}
