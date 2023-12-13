

import '.././styles/LogIn.css'

import "../styles/web/dark.css";

import { Metadata } from "next";



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
        <meta property="og:title" content="مكتب الغزال للمحاماة واﻹستشارات القانونية Ghazal LawFirm" />
        <meta property="og:description" content="مكتب الغزال للمحاماة واﻹستشارات القانونية Ghazal LawFirm" />
        <meta property="og:image" content="/logo-share.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="webiste" />
        <meta name="twitter:image" content="/logo-share.png" />
        <meta property="twitter:title" content="مكتب الغزال للمحاماة واﻹستشارات القانونية Ghazal LawFirm" />
      </head>

<html>
      

          {children}
        

    
      
 



</html>
       
</>

  )
}