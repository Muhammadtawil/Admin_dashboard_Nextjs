import { usePathname } from "next/navigation";
import MainLogo from "../../../../../public/Mainlogo.png";
import { useTranslations } from "next-intl";

const NavbarData = () => {
  const t = useTranslations('webMainPage');
  const path = usePathname();
  const en=path.includes('/en')

  return {
    logo: MainLogo,
    menus: [
      {
        name: t('home'),
        link: en?"/en/home":"/ar/home",
      },
      {
        name: t('about'),
        link: en?"/en/home#about":"/ar/home#about",
      },
      {
        name: t('services'),
        link: en?"/en/home#services":"/ar/home#services",
      },
      {
        name: t('blogs'),
        link: en?"/en/blogs":"/ar/blogs",
      },
      {
        name: t('news'),
        link: en?"/en/news":"/ar/news",
      },
      {
        name: t('contact'),
        link: en?"/en/contact":"/ar/contact",
      },
    ],
  };
};

export default NavbarData;
