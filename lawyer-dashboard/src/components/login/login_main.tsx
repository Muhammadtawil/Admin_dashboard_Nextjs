import React from "react";
import LoginForm from "./loginForm";
import SignIn from "@/server/login/login";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import async from "../../app/layout";
import { GetUser } from "@/server/users/users";
let isLogin = false;

export default async function LoginMain() {
  const user = await GetUser();
  async function onLogin(formData: FormData) {
    "use server";
    let login = false;
    isLogin = login;
    try {
      await SignIn(formData).then(() => (isLogin = true));
      // Redirect to "/tasks"
    } catch (error) {
      // Handle any errors here
      console.error("Login failed:", error);
    }
  }

  return (
    <LoginForm onLogin={onLogin} userName={user.userName} isLogin={isLogin} />
  );
}
