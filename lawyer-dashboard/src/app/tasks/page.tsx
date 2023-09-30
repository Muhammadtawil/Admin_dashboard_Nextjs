"use server";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import ToDoLists from "@/components/todo/todo_list";
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
import "swiper/css";
import "swiper/css/bundle";

export default async function ToDo() {
  return (
    <>
      <div className={styles.pageTitle}>
        <h1>To Do</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>To Do</li>
        </ul>
      </div>

      <ToDoLists />
    </>
  );
}
