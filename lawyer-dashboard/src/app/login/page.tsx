import "../../styles/style.css";

import LoginForm from "@/components/login/loginForm";
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
