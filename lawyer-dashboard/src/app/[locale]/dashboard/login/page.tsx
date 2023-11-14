


import LoadingSpinner from "@/components/dashboard/loading spinner/loadinSpinner";



import { CssBaseline } from "@mui/material";
import dynamic from "next/dynamic";
const LoginComponent = dynamic(() => import("../../../../components/dashboard/login/loginForm"), {
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
