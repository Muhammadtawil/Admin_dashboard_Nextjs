import React from "react";

import Link from "next/link";
import "../../styles/style.css";
import "./layout";
import LoginForm from "@/components/login/loginForm";
import LoginMain from "@/components/login/login_main";
const LoginPage = async () => {
  return (
    <>
      <LoginMain />
    </>
  );
};

export default LoginPage;
