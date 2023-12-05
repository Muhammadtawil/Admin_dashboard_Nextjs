"use client"
import { BsLinkedin, BsDribbble, BsFacebook, BsInstagram } from "react-icons/bs";
import { RiMailFill, RiMapPinUserFill, RiPhoneFill } from "react-icons/ri";
import Logo from "../../../../public/Mainlogo.png";
import ArMainLogo from "../../../../public/logonew.png";
import MianLogEn from '../../../../public/logoEn.png'
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const createFooterData = () => {
  const t = useTranslations('webFooter')
  const path = usePathname();
  const en=path.includes('/en')
  return {
    logo: en?MianLogEn: ArMainLogo,
    formTitle: "Join a Newsletter",
    copyRightMsg: t('copyRightMsg'),
    serivecs: {
      title: "Services",
      links: [
        { name: "UI/UX Design", link: "#service" },
        { name: "Developemnt", link: "#service" },
        { name: "Mobile and Web Design", link: "#service" },
        { name: "Illustration", link: "#service" },
      ],
    },
    contacts: [
      {
        icon: <RiMapPinUserFill fontSize={25} />,
        message: t('address2'),
      },
      {
        icon: <RiMapPinUserFill fontSize={25} />,
        message: t('address'),
      },
      {
        icon: <RiPhoneFill fontSize={25} />,
        message: "(+961)03-339-199",
      },
      {
        icon: <RiMailFill fontSize={25} />,
        message: "Ghazallawfirm@gmail.com",
      },
    ],
    socialLinks: [
      { icon: <BsFacebook />, link: "#" ,color:"#4267B2"},
      { icon: <BsInstagram />, link: "#",color:"#F56040" },
      { icon: <BsLinkedin />, link: "#" ,color:"#0A66C2"},
    ],
  };
};

export default createFooterData;
