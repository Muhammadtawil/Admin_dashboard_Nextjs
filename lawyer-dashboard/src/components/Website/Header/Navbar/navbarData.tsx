import { usePathname } from "next/navigation";
import LogoImg from "../../../../../public/mainLogo.png";
import { useTranslations } from "next-intl";

const NavbarData = () => {
  const t = useTranslations('webMainPage');
  const path = usePathname();
  const en=path.includes('/en')
  return {
    logo: LogoImg,
    menus: [
      {
        name: t('home'),
        link:"/",
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
        link: en?"/en/blogs":"/ar/blogs",
      },
      {
        name: t('news'),
        link: "#news",
      },
      {
        name: t('contact'),
        link: en?"/en/contact":"/ar/contact",
      },
    ],
  };
};

export default NavbarData;
