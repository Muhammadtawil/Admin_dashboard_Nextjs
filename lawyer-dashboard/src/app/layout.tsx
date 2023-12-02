
import Head from "next/head";

import '.././styles/LogIn.css'



import "../styles/web/dark.css";
import ScrollToTop from "@/components/dashboard/shared/ScrollToTop";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Ghazal LawFirm مكتب الغزال للمحاماة',
  description: 'Ghazal LawFirm مكتب الغزال للمحاماة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    
    <head>
        <title>Ghazal LawFirm مكتب الغزال للمحاماة</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/fav.png" />
      </head>
<html>
      

          {children}
        

    
      
 



</html>
       
</>

  )
}