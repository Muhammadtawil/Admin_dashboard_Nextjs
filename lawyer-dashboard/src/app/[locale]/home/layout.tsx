import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import "../../../styles/web/style.css";
import "../../../styles/web/dark.css";
import "../../../styles/web/bootstrap.min.css";
import "./globals.css";
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


import FooterMain from '@/components/Website/Footer/Footer-main';
import ScrollToTop from '@/components/dashboard/shared/ScrollToTop';
// import SubscriptionPopup from '@/components/shared/SubscriptionPopup';
import Image from 'next/image';


type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: ' مكتب الغزال للمحاماة واﻹستشارات القانونية Ghazal LawFirm',
  description: "مكتب الغزال للمحاماة تأسس عام ١٩٩٣، وانطلق في عالم المحاماة ليس فقط في الأراضي اللبنانية بل امتد نشاطه إلى كافة الدول العربية والأجنبية، وشمل عمل المكتب القانوني جميع القضايا المدنية والجزائية، وأصبح رائدًا في مجال القضايا التجارية وتأسيس الشركات والمؤسسات التجارية على كافة أنواعها ومستوياتها وذلك لأجل تطوير القطاع التجاري في لبنان وإنشاء صلة وصل بين الشركات التجارية في لبنان ودول العالم العربي.مكتبنا يقدم الاستشارات والمساعدات القانونية ومتميزٌ في القضايا المدنية المتعلقة بجميع الدعاوى العقارية والمالية وصولاً الى القضايا التجارية بكافة مستوياتها. نعمل أيضًا في تقديم الخدمات القانونية بما يخص القضايا الجزائية والجنائية. امتد النشاط القانوني من المكتب الرئيسي في بيروت الى كافة الاقضية اللبنانية حتى توسع العمل القانوني ووصل الى كافة الدول العربية ايماناً منّا برسالة مهنة المحاماة وسموها ورفعتها. الغزال للمحاماة مكتب يضم فريق متخصص من المحامين في كافة المجالات القانونية الذي يشرف عليه المحامي - خالد الغزال",
  generator: 'ClickerSoftware',
  applicationName: ' مكتب الغزال للمحاماة واﻹستشارات القانونية Ghazal LawFirm  ',
  referrer: 'origin-when-cross-origin',
  keywords: ['LawFim', 'Ghazal', 'Ghazal lawFirm', 'ghazal law', 'خالد الغزال', 'المحامي خالد الغزال', 'مكتب الغزال', 'مكتب الغزال للمحاماة', 'محامي', 'الغزال', 'Khaled Ghazal', 'Khaled ALghazal'],
  authors: [{ name: 'Ghazal lawFirm' }, { name: 'Ghazal lawFirm', url: 'www.ghazal-lawfirm.com' }],
  creator: 'Clickers software',
  publisher: 'Clickers software',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
metadataBase:new URL('https://www.ghazal-lawfirm.com'), 
  openGraph: {
    title: ' مكتب الغزال للمحاماة واﻹستشارات القانونية Ghazal LawFirm',
    description: "مكتب الغزال للمحاماة تأسس عام ١٩٩٣، وانطلق في عالم المحاماة ليس فقط في الأراضي اللبنانية بل امتد نشاطه إلى كافة الدول العربية والأجنبية، وشمل عمل المكتب القانوني جميع القضايا المدنية والجزائية، وأصبح رائدًا في مجال القضايا التجارية وتأسيس الشركات والمؤسسات التجارية على كافة أنواعها ومستوياتها وذلك لأجل تطوير القطاع التجاري في لبنان وإنشاء صلة وصل بين الشركات التجارية في لبنان ودول العالم العربي.مكتبنا يقدم الاستشارات والمساعدات القانونية ومتميزٌ في القضايا المدنية المتعلقة بجميع الدعاوى العقارية والمالية وصولاً الى القضايا التجارية بكافة مستوياتها. نعمل أيضًا في تقديم الخدمات القانونية بما يخص القضايا الجزائية والجنائية. امتد النشاط القانوني من المكتب الرئيسي في بيروت الى كافة الاقضية اللبنانية حتى توسع العمل القانوني ووصل الى كافة الدول العربية ايماناً منّا برسالة مهنة المحاماة وسموها ورفعتها. الغزال للمحاماة مكتب يضم فريق متخصص من المحامين في كافة المجالات القانونية الذي يشرف عليه المحامي - خالد الغزال",
    images: [
      {
        url: '/logo-share.png',
        width: 400,
        height:400
  }
]
  },
  verification: {
    google:"EkEf8g_M9ddFueyzAi4ZANdgf3cBkuUmjnpwgK4vH8U"
  }
  

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
      <head>
        <title>مكتب الغزال للمحاماة واﻹستشارات القانونية Ghazal LawFirm</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="مكتب الغزال للمحاماة واﻹستشارات القانونية Ghazal LawFirm" />
        <meta property="og:description" content="مكتب الغزال للمحاماة واﻹستشارات القانونية Ghazal LawFirm" />
        <meta property="og:image" content="/logo-share.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="webiste" />
        <meta name="twitter:image" content="/logo-share.png" />

      </head>
      <NextIntlClientProvider locale={locale ? locale : 'en'} messages={messages}>

        <body>
          {/* <Navbar /> */}
          {/* <NavBarTest/> */}

          <div className={`main-wrapper-content`}>
            {children}
            {/* <SubscriptionPopup /> */}

        
            <ScrollToTop />

          </div>
          {/* <GoTop/> */}
        </body>



      </NextIntlClientProvider>
    </html>
  );
}
