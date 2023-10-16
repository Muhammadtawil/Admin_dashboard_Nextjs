// Use dynamic import to load BlogsComponent lazily
const BlogsComponent = dynamic(() => import("@/components/blogs/blogs"), {
  loading: () => <p>Loading...</p>, // Optional loading component
  ssr: false, // Disable server-side rendering for this component
});

import PageTitle from "@/components/shared/PageTitle/pageTitle";
import dynamic from "next/dynamic";
export default function BlogPage() {
  return (
    <>
      <PageTitle title="Blogs" />
      <BlogsComponent />
    </>
  );
}
