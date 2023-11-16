"use client"
import { useSession } from "next-auth/react"
import { useLocale, useTranslations } from "next-intl";
import PageTitle from "../shared/PageTitle/pageTitle";
import style from "./main.module.scss" 

export default function MainComponent() {
const t = useTranslations('mainPage');
const lang =useTranslations('LocaleSwitcher')
  const { data: session } = useSession();
  const locale = useLocale();

  return (

    <div className={style.mainStyle}>
      <PageTitle title={t('pageTitle')} />
      
<h1 className={locale==='ar'?"arWelcome":"enWelcome"}>
        {locale === 'ar'
          ? `${session?.userName } ${t('welcomeMessage')} `
          : `${t('welcomeMessage')} ${session?.userName}`}
      </h1>


          
</div>
      
  
    );
}
