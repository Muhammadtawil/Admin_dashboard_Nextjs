
import ClientsComponentList from "@/components/clients/clients";
import React from "react";

import PageTitle from "@/components/shared/PageTitle/pageTitle";
import { useSession } from "next-auth/react";
import async from "../../../components/blogs/blogs";
import { getDictionary } from "../../../getDictionary";
import MainComponent from "@/components/main/main";
export default async function ClientsPage({ params }: any) {
  const lang = await getDictionary(params.lang);
const text=lang.welcomeMessage
  console.log(lang, "params for home");

  return (
    <>
      <PageTitle title="Dashboard" />

      <MainComponent text={lang.welcomeMessage } />
    </>
  );
}
