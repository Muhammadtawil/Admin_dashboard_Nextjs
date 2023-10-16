import BlogsComponent from "@/components/blogs/blogs";
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
import NewsPageComponent from "../../components/news/newsForm";
import PageTitle from "@/components/shared/PageTitle/pageTitle";
import NewsComponent from "@/components/news/news";
export default function BlogPage() {
  return (
    <>
      <PageTitle title="News" />
      <NewsComponent />
    </>
  );
}
