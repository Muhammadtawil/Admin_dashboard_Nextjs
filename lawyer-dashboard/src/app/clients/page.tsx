// import ClientsComponentList from "@/components/clients/clients";

import PageTitle from "@/components/shared/PageTitle/pageTitle";
import dynamic from "next/dynamic";
// Use dynamic import to load BlogsComponent lazily
const ClientsComponent = dynamic(() => import("@/components/clients/clients"), {
  loading: () => <p>Loading...</p>, // Optional loading component
  ssr: false, // Disable server-side rendering for this component
});

export default function ClientsPage() {
  return (
    <>
      <PageTitle title="Clients" />

      <ClientsComponent />
    </>
  );
}
