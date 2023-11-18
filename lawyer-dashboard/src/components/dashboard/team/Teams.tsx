// TeamServer.js (Server Component)
import { DeleteUser, GetUsers } from "../../../server/users/users";

export function TeamServer() {
  const users = GetUsers(); // Fetch data on the server side
  return { users };
}
import React from "react";
import AddTeamForm from "./add_Team_form";
import { DeleteService } from "../../../server/services/services";
import { revalidatePath } from "next/cache";
import {
  CreateUser,
  UpdateUser,
  UpdateUserRole,
  UpdateUserImage,
} from "../../../server/users/users";
import TeamTable from "./Team_Table";
import { redirect } from "next/dist/server/api-utils";

async function Delete(userId: string) {
  "use server";
  try {
    await DeleteUser(userId);
    revalidatePath("/team", "page");
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
  revalidatePath("/team", "page");
}


 async function fetchUsersData() {
  try {
    const users = await GetUsers(); // Fetch data on the server side
    return { users };
  } catch (error) {
    console.error("Error fetching user data:", error);
    return { users: [] }; // Return an empty array in case of an error
  }
}

export default async function Teams() {
  const users =await GetUsers();

  return (
    
    <>
      <AddTeamForm onCreate={onCreate} />
      <TeamTable
        dataRows={users}
        deleteTask={Delete}
        updateTask={onUpdate}
        UpdateImage={updateImage}
      />
    </>
  );
}
