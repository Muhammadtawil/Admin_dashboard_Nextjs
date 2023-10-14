import ClientsComponentList from "@/components/clients/clients";
import React from "react";

// Globals Styles
import "../../styles/globals.css";
// Rtl Styles
import "../../styles/rtl.css";
// Dark Mode Styles
import "../../styles/dark.css";
// Theme Styles
import theme from "../../styles/theme";
import "react-tabs/style/react-tabs.css";
import PageTitle from "@/components/shared/PageTitle/pageTitle";
export default function ClientsPage() {
  return (
    <>
      <PageTitle title="Clients" />

      <ClientsComponentList />
    </>
  );
}
