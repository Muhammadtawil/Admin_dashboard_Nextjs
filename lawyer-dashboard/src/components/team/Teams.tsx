import React from "react";
import User from "./Team_Table";
import AddTeamForm from "./add_Team_form";
import AddService, { DeleteService } from "../../server/services/services";

import { revalidatePath } from "next/cache";
import {
  GetUsers,
  CreateUser,
  UpdateUser,
  UpdateUserRole,
  UpdateUserImage,
} from "../../server/users/users";

async function Delete(serviceId: string) {
  "use server";
  try {
    await DeleteService(serviceId);
    revalidatePath("/teamTest", "page");
  } catch (error) {}
}

async function onCreate(formData: FormData) {
  "use server";
  try {
    await CreateUser(formData);
    revalidatePath("/team", "page");
  } catch (error) {}
}

async function onUpdate(
  formData: FormData,
  userId: string,
  selectedImage: File
) {
  "use server";
  try {
    await UpdateUserRole(formData, userId);
    await UpdateUser(formData, userId);

    revalidatePath("/team", "page");
  } catch (error) {
    console.error(error);
  }
}
async function updateImage(formData: FormData, userId: string) {
  "use server";
  await UpdateUserImage(formData, userId);
}

export default async function Teams() {
  const users = await GetUsers();

  return (
    <>
      <AddTeamForm onCreate={onCreate} />
      <User
        dataRows={users}
        deleteTask={Delete}
        updateTask={onUpdate}
        UpdateImage={updateImage}
      />
    </>
  );
}
