

import LoginForm from "@/components/login/loginForm";
import "../../../styles/style.css";



import { CssBaseline } from "@mui/material";

const LoginPage = async () => {
  return (
    <>
      <CssBaseline />
      <LoginForm />
    </>
  );
};

export default LoginPage;
