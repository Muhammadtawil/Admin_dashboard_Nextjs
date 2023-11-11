
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
    
    <head>
        <title>LawFirm</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/fav.png" />
      </head>
<html>
      

    
        {children}

 



</html>
       
</>

  )
}