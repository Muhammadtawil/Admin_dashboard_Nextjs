
// import "./page.module.css";
// import "../../styles/remixicon.css";
// Chat Styles
// import "../../styles/chat.css";
// Globals Styles
// import "../../styles/globals.css";
// Dark Mode Styles
// import "../../styles/dark.css";
// Theme Styles
// import theme from "../../styles/theme";
// import "react-tabs/style/react-tabs.css";

// import "../styles/style.css";
import { CssBaseline } from "@mui/material";
import LoginForm from "@/components/dashboard/login/loginForm";
import { redirect } from "next/navigation";
import { revalidateTag } from 'next/cache';


export default function Home() {


  return (
 
      revalidateTag('notifications')


 )
   
  
}
