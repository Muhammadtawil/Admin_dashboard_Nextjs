import LoginMain from "@/components/login/login_main";
// Globals Styles
import "../../styles/globals.css";
// Rtl Styles
import "../../styles/rtl.css";
// Dark Mode Styles
import "../../styles/dark.css";
// Theme Styles
import theme from "../../styles/theme";
import "react-tabs/style/react-tabs.css";
import PageTitle from "@/components/shared/PageTitle/pageTitle";
import "./layout";
const LoginPage = async () => {
  return (
    <>
      <LoginMain />
    </>
  );
};

export default LoginPage;
