import LoadingSpinner from "@/components/loading spinner/loadinSpinner";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// Use dynamic import to load BlogsComponent lazily
const BlogsComponent = dynamic(() => import("../../../../components/blogs/blogs"), {
  loading: () => <LoadingSpinner />, 
  ssr: false, // Disable server-side rendering for this component
});

export default function BlogPage() {
  return (
    <>

      <BlogsComponent />
    </>
  );
}
