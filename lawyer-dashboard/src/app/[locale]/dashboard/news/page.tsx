
import dynamic from "next/dynamic";

import LoadingSpinner from "@/components/loading spinner/loadinSpinner";

const NewsComponent = dynamic(() => import("../../../../components/news/news"), {
  loading: () => <LoadingSpinner />, 
  ssr: false, // Disable server-side rendering for this component
});
export default function BlogPage({ params }: any) {


  return (
    <>
     
      <NewsComponent />
    </>
  );
}
