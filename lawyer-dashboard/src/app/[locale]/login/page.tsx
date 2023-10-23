


import LoadingSpinner from "@/components/loading spinner/loadinSpinner";



import { CssBaseline } from "@mui/material";
import dynamic from "next/dynamic";
const LoginComponent = dynamic(() => import("../../../components/login/loginForm"), {
  loading: () => <LoadingSpinner />, 
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
