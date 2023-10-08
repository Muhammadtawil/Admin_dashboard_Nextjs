import React from "react";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import "../page.module.css";
import "../../styles/remixicon.css";
// Chat Styles
import "../../styles/chat.css";
// Globals Styles
import "../../styles/globals.css";
// Rtl Styles
import "../../styles/rtl.css";
// Dark Mode Styles
import "../../styles/dark.css";
// Theme Styles
import theme from "../../styles/theme";
import "react-tabs/style/react-tabs.css";
import ServicesComponent from "@/components/services/services";
export default function ServicesPage() {
  return (
    <>
      <div className={styles.pageTitle}>
        <h1>Services</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Services</li>
        </ul>
      </div>
      <ServicesComponent />
    </>
  );
}
