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
import PageTitle from "@/components/shared/PageTitle/pageTitle";

export default async function ToDo() {
  return (
    <>
      <PageTitle title="Tasks" />

      <ToDoLists />
    </>
  );
}
