
import dynamic from "next/dynamic";

import LoadingSpinner from "@/components/dashboard/loading spinner/loadinSpinner";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const NewsComponent = dynamic(() => import("../../../../components/dashboard/news/news"), {
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
