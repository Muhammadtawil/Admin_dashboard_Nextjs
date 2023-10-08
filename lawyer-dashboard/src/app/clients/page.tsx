import ClientsComponentList from "@/components/clients/clients";
import Link from "next/link";
import React from "react";
import styles from "@/styles/PageTitle.module.css";
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
export default function ClientsPage() {
  return (
    <>
      <div className={styles.pageTitle}>
        <h1>Clients</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Clients</li>
        </ul>
      </div>

      <ClientsComponentList />
    </>
  );
}
