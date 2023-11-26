
import Head from "next/head";
import ClientLayout from "./client.layout";
import { Metadata } from "next";
import Providers from "../../../components/providers";
import { ReactNode } from "react";
import { NextIntlClientProvider } from 'next-intl'
import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/dashboard/loading spinner/loadinSpinner";
import { GetNotifications } from "@/server/notifications/notifications";


type Props = {
  children: ReactNode
  params: { locale: string }
}

export const metadata: Metadata = {
  title: "Ghazal LawFirm",
  description: "Ghazal LawFirm",
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../dictionaries/${locale}.json`)).default
  } catch (error) {
console.log(error)
  }
}

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return ['en', 'ar'].map((locale) => ({ locale }))
}

const NotificationsComponent = dynamic(() => import("../../../components/dashboard/TopNavbar/notification/notificationsMain"), {
  loading: () => <LoadingSpinner />, 
  ssr: false, // Disable server-side rendering for this component
});

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale)
  const notifications=await GetNotifications()

  const lang = locale === 'ar' ? 'ar' : 'en';
  return (


        
    <html>
          <Head>
        <title>Dashboard</title>
        {/* <link rel="preload" href="style.css" as="style" /> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Providers>
      <NextIntlClientProvider locale={locale?locale:"en"} messages={messages}>
        
      <body >
          <ClientLayout children={children} topBarChildren={<NotificationsComponent notificationData={notifications}/>}/>
          </body>

          </NextIntlClientProvider>

      </Providers>
       </html>
  );
}
