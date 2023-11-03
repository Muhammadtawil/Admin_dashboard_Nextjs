// import "./page.module.css";
// import ".././styles/remixicon.css";
// Chat Styles
// import ".././styles/chat.css";
// Globals Styles
// import ".././styles/globals.css";

// Dark Mode Styles
import Head from "next/head";
import ".././styles/dark.css";
// import ".././styles/style.css";
import '.././styles/LogIn.css'

// Theme Styles
// import theme from ".././styles/theme";
// import "react-tabs/style/react-tabs.css";





export const metadata = { }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    
      <Head>
      <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
    rel="stylesheet"
  />
      </Head >
<html>
      

        {children}




</html>
       
</>

  )
}