"use client"
import  { useState } from "react";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "../../../styles/remixicon.css";
import "../../../styles/globals.css";
import "react-tabs/style/react-tabs.css";
import TopNavbar from "../../../components/dashboard/TopNavbar/TopNavBar";
import ScrollToTop from "../../../components/dashboard/shared/ScrollToTop";
import Sidebar from "../../../components/dashboard/LeftSidebar/LeftSideBar";
import TopNavBarMain from "@/components/dashboard/TopNavbar/notification/topNavBar_Main";


const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children,topBarChildren , onSignOut}: { children: React.ReactNode ,topBarChildren:any, onSignOut: any}) {

  
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const closeSidebar = () => {
    setActive(false);
  };

  const router = usePathname();
  const isLoginPage = router.includes("/login");


  return (
 
    <div className={inter.className}>
      {isLoginPage ? (
        <div>{children}</div>
      ) : (
      
            
        <div className={`main-wrapper-content ${active && "active"}`}>
          <TopNavBarMain toogleActive={toggleActive} children={topBarChildren} onSignOut={onSignOut} />
          <Sidebar toogleActive={toggleActive} closeSidebar={closeSidebar} onSignOut={onSignOut} />
          {children}
          <ScrollToTop />
            </div>
            
      )}
        </div>
  
      
  );
}
