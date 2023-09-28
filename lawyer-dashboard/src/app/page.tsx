import Image from "next/image";
import "./page.module.css";
import "../styles/remixicon.css";
// Chat Styles
import "../styles/chat.css";
// Globals Styles
import "../styles/globals.css";
// Rtl Styles
import "../styles/rtl.css";
// Dark Mode Styles
import "../styles/dark.css";
// Theme Styles
import theme from "../styles/theme";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/bundle";
import { ThemeProvider, CssBaseline } from "@mui/material";
export default function Home() {
  return (
    <>
      <CssBaseline />
    </>
  );
}
