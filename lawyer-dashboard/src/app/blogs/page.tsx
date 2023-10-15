// import BlogsComponent from "@/components/blogs/blogs";
import styles from "@/styles/PageTitle.module.css";

// Globals Styles
import "../../styles/globals.css";
// Rtl Styles
import "../../styles/rtl.css";
// Dark Mode Styles
import "../../styles/dark.css";
// Theme Styles
import theme from "../../styles/theme";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";

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
