"use client"
import { useSession } from "next-auth/react";
import BarsDataset from "./chart";
import { Stack } from "@mui/material";
import HorizontalBars from "./charttwo";
import { useLocale, useTranslations } from "next-intl";


export default function MainComponent() {
const t = useTranslations('mainPage');
const lang =useTranslations('LocaleSwitcher')
  const { data: session } = useSession();
  const locale = useLocale();

  return (

<>
<h1>
        {locale === 'ar'
          ? `${session?.userName } ${t('welcomeMessage')} `
          : `${t('welcomeMessage')} ${session?.userName}`}
      </h1>


          
</>
      
  
    );
}
