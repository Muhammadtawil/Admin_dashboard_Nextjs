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
import "react-tabs/style/react-tabs.css";
import ServicesComponent from "@/components/services/services";
import PageTitle from "@/components/shared/PageTitle/pageTitle";
export default function ServicesPage() {
  return (
    <>
      <PageTitle title="Services" />
      <ServicesComponent />
    </>
  );
}
