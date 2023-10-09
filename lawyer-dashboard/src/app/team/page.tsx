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


import TeamComponent from "@/components/team/services";

export default async function TeamPage() {

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>Team</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Team</li>
        </ul>
      </div>

      <TeamComponent />
    </>
  );
}
