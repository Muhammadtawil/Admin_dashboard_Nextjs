import React from "react";
import User from "../team/Team_Table";
import AddTeamForm from "./add_Team_form";
import AddService, {
  DeleteService,
  GetServices,
  UpdateService,
} from "@/server/services/services";
import { DeleteAssignedTask } from "@/server/tasks/tasks";
import { revalidatePath } from "next/cache";
import { GetUsers } from "@/server/users/users";

async function Delete(serviceId: string) {
  "use server";
  try {
    await DeleteService(serviceId);
    revalidatePath("/teamTest", "page");
  } catch (error) {}
}

async function DeleteAssignedTasks(assigntaskId: string) {
  "use server";
  try {
    await DeleteAssignedTask(assigntaskId);
    revalidatePath("/teamTest", "page");
  } catch (error) {
    console.log(error);
  }
}

async function onCreate(formData: FormData) {
  "use server";
  try {
    await AddService(formData);
    revalidatePath("/teamTest", "page");
  } catch (error) {}
}

async function onUpdate(formData: FormData, clientId: string) {
  "use server";
  try {
    await UpdateService(formData, clientId);
    revalidatePath("/teamTest", "page");
  } catch (error) {}
}

export default async function Teams() {
  const users = await GetUsers();

  return (
    <>
      <AddTeamForm onCreate={onCreate} />
      <User dataRows={users} deleteTask={Delete} updateTask={onUpdate} />
    </>
  );
}
