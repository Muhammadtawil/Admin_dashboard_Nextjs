"use client";
import ClientsComponentList from "@/components/clients/clients";
import React from "react";

import PageTitle from "@/components/shared/PageTitle/pageTitle";
import { useSession } from "next-auth/react";
export default function ClientsPage() {
  const { data: session } = useSession();
  return (
    <>
      <PageTitle title="Dashboard" />

      <h1>{`Welcome ${session?.userName}`}</h1>
    </>
  );
}
