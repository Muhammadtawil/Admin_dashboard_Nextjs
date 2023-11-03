import LogoImg from "../../../../../public/mainLogo.png";
import { useTranslations } from "next-intl";

const NavbarData = () => {
  const t = useTranslations('webMainPage');

  return {
    logo: LogoImg,
    menus: [
      {
        name: t('home'),
        link: "/",
      },
      {
        name: t('about'),
        link: "#about",
      },
      {
        name: t('services'),
        link: "#services",
      },
      {
        name: t('blogs'),
        link: "/ar/blogs",
      },
      {
        name: t('news'),
        link: "/#news",
      },
      {
        name: t('contact'),
        link: "/#news",
      },
    ],
  };
};

export default NavbarData;
