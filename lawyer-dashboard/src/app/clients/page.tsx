import ClientsComponentList from "@/components/clients/clients";

import PageTitle from "@/components/shared/PageTitle/pageTitle";
export default function ClientsPage() {
  return (
    <>
      <PageTitle title="Clients" />

      <ClientsComponentList />
    </>
  );
}
