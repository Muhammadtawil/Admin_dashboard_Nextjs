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


const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children }: { children: React.ReactNode }) {

  
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
          <TopNavbar toogleActive={toggleActive} />
          <Sidebar toogleActive={toggleActive} closeSidebar={closeSidebar} />
          {children}
          <ScrollToTop />
            </div>
            
      )}
        </div>
  
      
  );
}
