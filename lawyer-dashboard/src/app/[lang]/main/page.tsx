


import { getDictionary } from "../../../getDictionary";
import PageTitle from "../../../components/shared/PageTitle/pageTitle";
import MainComponent from "../../../components/main/main";

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
