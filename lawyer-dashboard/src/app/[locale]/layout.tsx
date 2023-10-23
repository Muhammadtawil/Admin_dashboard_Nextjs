
import Head from "next/head";

// import { Locale, i18n } from '../../../i18n.config';
// import { Inter } from "next/font/google";

// import theme from "../../styles/theme";
// import "react-tabs/style/react-tabs.css";
import ClientLayout from "./client.layout";
import { Metadata } from "next";
import Providers from "../../components/providers";
import { ReactNode } from "react";
import { NextIntlClientProvider } from 'next-intl'


type Props = {
  children: ReactNode
  params: { locale: string }
}

export const metadata: Metadata = {
  title: "Lawfirm Dashboard",
  description: "Generated by Clickers",
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../dictionaries/${locale}.json`)).default
  } catch (error) {
console.log(error)
  }
}

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return ['en', 'ar'].map((locale) => ({ locale }))
}



export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale)
  return (

    // <html lang={params.lang}>
        
    <html lang={locale}>
          <Head>
        <title>Dashboard</title>
        {/* <link rel="preload" href="style.css" as="style" /> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Providers>
      <NextIntlClientProvider locale={locale?locale:"en"} messages={messages}>
      <body >
          <ClientLayout children={children}/>
          </body>

          </NextIntlClientProvider>

      </Providers>
       </html>
  );
}
