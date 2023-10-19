"use client";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Locale, i18n } from '../../i18n.config'

import { usePathname } from "next/navigation";

import ".././styles/remixicon.css";
// Chat Styles
import ".././styles/chat.css";
// Globals Styles
import ".././styles/globals.css";
// Rtl Styles
import ".././styles/rtl.css";
// Dark Mode Styles
import ".././styles/dark.css";
// Theme Styles
import theme from "../styles/theme";
import "react-tabs/style/react-tabs.css";



import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import TopNavbar from "../components/TopNavbar/TopNavBar";
import ScrollToTop from "../components/shared/ScrollToTop";
import ControlPanelModal from "../components/ControlPanelModal/control_panel";
import Sidebar from "../components/LeftSidebar/LeftSideBar";
// import SidebarTest from "@/components/sidebar/Sidebar";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Lawfirm Dashboard",
//   description: "Generated by Clickers",
// };

export default function ClientLayout({
  children,

}: {
    children: React.ReactNode;
  
}) {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };
  const router = usePathname();

  const isLoginPage = router.includes("/login");

  return (
  <>
  
        
    
      {isLoginPage ? (
        <body className={inter.className}>{children}</body>
      ) : (
        <body className={inter.className}>
          <div className={`main-wrapper-content ${active && "active"}`}>
            <>
              <TopNavbar toogleActive={toggleActive} />
              <Sidebar toggleActive={toggleActive} />
              {/* <SideNav onClose={() => setOpenNav(true)} open={openNav} /> */}
            </>

            {children}
          </div>
    

          <>
            <ScrollToTop />

            <ControlPanelModal />
          </>
        </body>
      )}
  

      </>
      
  )
}