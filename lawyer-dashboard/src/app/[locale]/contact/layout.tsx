import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import "../../../styles/web/style.css";
import "../../../styles/web/dark.css";
import "../../../styles/web/bootstrap.min.css";
import "../home/globals.css";
import "../../../styles/web/animate.css";
import "/public/fonts/flaticon.css";

// import "../../../styles/web/responsive.css";
// import "../../../styles/web/flaticon.css";
// import "../../../styles/web/boxicons.min.css";
// import "../../../styles/web/animate.css";
// import Navbar from '@/components/Website/Navbar/Navbar';
// import "../../../components/Website/Hero/Hero.module.scss";
// import NavBarTest from '@/components/Website/Header/Navbar/Navbar';
// import  "../../../components/Website/Header/Navbar/Navbar.module.scss";
// import "../../../components/Website/News/Project.module.scss"
import FooterSection from '@/components/Website/Footer/Footer';

import NavBar from '@/components/Website/Header/Navbar/Navbar';
import FooterMain from '@/components/Website/Footer/Footer-main';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: 'Ghazal LawFirm مكتب الغزال للمحاماة',
  description: 'Ghazal LawFirm مكتب الغزال للمحاماة',
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../dictionaries/${locale}.json`)).default;
  } catch (error) {
    console.log(error);
  }
}

export async function generateStaticParams() {
  return ['en', 'ar'].map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages(locale);

  const lang = locale === 'ar' ? 'ar' : 'en'

  return (
    <html lang={lang}>
          <NextIntlClientProvider locale={locale ? locale : 'en'} messages={messages}>
          <head>
        <title>Ghazal LawFirm مكتب الغزال للمحاماة</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/fav.png" />
      </head>
              <body>
          {/* <Navbar /> */}
  

          {children}
          <FooterMain/>
        {/* <GoTop/> */}
        
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
