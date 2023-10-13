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
export default function BlogPage() {
  return (
    <>
      <div className={styles.pageTitle}>
        <h1>Blogs</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Blogs</li>
        </ul>
      </div>
      <BlogsComponent />
    </>
  );
}
