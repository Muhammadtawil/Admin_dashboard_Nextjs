import { usePathname } from "next/navigation";
import MainLogo from "../../../../../public/logonew.png";
import EnMianLog from '../../../../../public/logoEn.png'
import { useTranslations } from "next-intl";

const NavbarData = () => {
  const t = useTranslations('webMainPage');
  const path = usePathname();
  const en=path.includes('/en')

  return {
    logo:en?EnMianLog : MainLogo,
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
        name: t('offices'),
        link: en?"/en/offices":"/ar/offices",
      },
      {
        name: t('contact'),
        link: en?"/en/contact":"/ar/contact",
      },
    ],
  };
};

export default NavbarData;
