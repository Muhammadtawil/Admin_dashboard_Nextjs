


import "../../../styles/style.css";



import { CssBaseline } from "@mui/material";
import dynamic from "next/dynamic";
const LoginComponent = dynamic(() => import("../../../components/login/loginForm"), {
  loading: () => <p>Loading...</p>, // Optional loading component
  ssr: false, // Disable server-side rendering for this component
});
const LoginPage = async () => {
  return (
    <>
      <CssBaseline />
      <LoginComponent />
    </>
  );
};

export default LoginPage;
