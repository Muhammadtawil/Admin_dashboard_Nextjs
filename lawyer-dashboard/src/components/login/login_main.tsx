import React from "react";
import LoginForm from "./loginForm";
import SignIn from "@/server/login/login";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import async from "../../app/layout";
import { GetUser } from "@/server/users/users";

export default async function LoginMain() {
  const user = await GetUser();
  async function onLogin(formData: FormData) {
    "use server";
    try {
      await SignIn(formData);
      redirect("/tasks");

      //   revalidatePath("/tasks", "page");
    } catch (error) {}
  }
  return <LoginForm onLogin={onLogin} userName={user.userName} />;
}
