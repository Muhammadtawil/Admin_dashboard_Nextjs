import PageTitle from "@/components/shared/PageTitle/pageTitle";
import dynamic from "next/dynamic";

const NewsComponent = dynamic(() => import("@/components/news/news"), {
  loading: () => <p>Loading...</p>, // Optional loading component
  ssr: false, // Disable server-side rendering for this component
});

export default function BlogPage() {
  return (
    <>
      <PageTitle title="News" />
      <NewsComponent />
    </>
  );
}
