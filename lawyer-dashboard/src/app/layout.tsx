
import Head from "next/head";

import '.././styles/LogIn.css'



import "../styles/web/dark.css";
import ScrollToTop from "@/components/dashboard/shared/ScrollToTop";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:  ' مكتب الغزال للمحاماة واﻹستشارات القانونية Ghazal LawFirm  ',
  description:  ' مكتب الغزال للمحاماة واﻹستشارات القانونية Ghazal LawFirm  ',
  generator: 'ClickerSoftwarw',
  applicationName: ' مكتب الغزال للمحاماة واﻹستشارات القانونية Ghazal LawFirm  ',
  referrer: 'origin-when-cross-origin',
  keywords: ['LawFim', 'Ghazal', 'Ghazal lawFirm','ghazal law','خالد الغزال','المحامي خالد الغزال', 'مكتب الغزال', 'مكتب الغزال للمحاماة', 'محامي', 'الغزال', 'Khaled Ghazal','Khaled ALghazal'],
  authors: [{ name: 'Ghazal lawFirm' }, { name: 'Ghazal lawFirm', url: 'www.ghazal-lawfirm.com' }],
  creator: 'Clickers software',
  publisher: 'Clickers software',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
 
    <head>
        <title>مكتب الغزال للمحاماة واﻹستشارات القانونية Ghazal LawFirm</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logonew.png" sizes="100x80" />
      </head>

<html>
      

          {children}
        

    
      
 



</html>
       
</>

  )
}