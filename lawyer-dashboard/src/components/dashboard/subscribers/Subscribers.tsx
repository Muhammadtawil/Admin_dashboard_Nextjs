import React from "react";
import { revalidatePath } from "next/cache";
import SubscribersAddComponent from "./Subscribers_Form";
import SubscribersTable from "./SubscribersTable";
import AddSubscribers, { DeleteSubscriber, GetSubscribers } from "@/server/subscribers/subscribers";

async function onCreate(formData: FormData) {
  "use server";
  try {
    await AddSubscribers(formData);
    revalidatePath("/subscribers", "page");
  } catch (error) {}
}

async function Delete(subscriberId: string) {
  "use server";
  try {
    await DeleteSubscriber(subscriberId);
    revalidatePath("/subscribers", "page");
  } catch (error) {}
}

export default async function SubscribersComponent() {
  const subscribers = await GetSubscribers();

  return (
    <>
      <SubscribersAddComponent onCreate={onCreate} />
      <SubscribersTable
        dataRows={subscribers}
        deleteSubscriber={Delete}
   
      />
    </>
  );
}
