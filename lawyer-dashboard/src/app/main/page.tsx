"use client";
import ClientsComponentList from "@/components/clients/clients";
import React from "react";

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
import { useSession } from "next-auth/react";
export default function ClientsPage() {
  const { data: session } = useSession();
  return (
    <>
      <PageTitle title="Dashboard" />

      <h1>{`Welcome ${session?.userName}`}</h1>
    </>
  );
}
