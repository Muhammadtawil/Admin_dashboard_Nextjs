// import "./page.module.css";
// import ".././styles/remixicon.css";
// Chat Styles
// import ".././styles/chat.css";
// Globals Styles
// import ".././styles/globals.css";

// Dark Mode Styles
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
<html>
      

        {children}




</html>
       

  )
}