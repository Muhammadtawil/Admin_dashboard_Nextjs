"use client"
import { BsLinkedin, BsDribbble, BsFacebook, BsInstagram } from "react-icons/bs";
import { RiMailFill, RiMapPinUserFill, RiPhoneFill } from "react-icons/ri";
import Logo from "../../../../public/Mainlogo.png";
import { useTranslations } from "next-intl";

const createFooterData = () => {
  const t=useTranslations('webFooter')
  return {
    logo: Logo,
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
        message: t('address'),
      },
      {
        icon: <RiMapPinUserFill fontSize={25} />,
        message: t('address2'),
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
      { icon: <BsFacebook />, link: "#" },
      { icon: <BsInstagram />, link: "#" },
      // { icon: <BsDribbble />, link: "#" },
      { icon: <BsLinkedin />, link: "#" },
    ],
  };
};

export default createFooterData;
