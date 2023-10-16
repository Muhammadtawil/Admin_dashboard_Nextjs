// import "../page.module.css";
// import "../../styles/remixicon.css";
// // Chat Styles
// import "../../styles/chat.css";
// // Globals Styles
// import "../../styles/globals.css";
// // Rtl Styles
// import "../../styles/rtl.css";
// // Dark Mode Styles
// import "../../styles/dark.css";
// // Theme Styles
// import theme from "../../styles/theme";

import TeamComponent from "@/components/team/Teams";
import PageTitle from "@/components/shared/PageTitle/pageTitle";

export default async function TeamPage() {
  return (
    <>
      <PageTitle title="Team" />

      <TeamComponent />
    </>
  );
}
