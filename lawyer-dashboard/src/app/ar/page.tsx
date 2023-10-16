import Locales from "@/components/locales/locales";
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
export default function page() {
  return <Locales />;
}
