import React from "react";
import LoginForm from "./loginForm";
import SignIn from "@/server/login/login";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function LoginMain() {
  async function onLogin(formData: FormData) {
    "use server";
    try {
      await SignIn(formData);
      redirect("/tasks");

      //   revalidatePath("/tasks", "page");
    } catch (error) {}
  }
  return <LoginForm onLogin={onLogin} />;
}
