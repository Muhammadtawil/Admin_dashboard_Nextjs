
import Head from "next/head";

import '.././styles/LogIn.css'



import "../styles/web/dark.css";


export const metadata = { }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    
      <Head>

      {/* <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
    rel="stylesheet"
        /> */}

  next();
      </Head >
<html>
      

        {children}




</html>
       
</>

  )
}