import { BsBehance, BsDribbble, BsFacebook, BsGithub } from "react-icons/bs";
import { RiMailFill, RiMapPinUserFill, RiPhoneFill } from "react-icons/ri";
import LogoImg from "../../../../../public/Mainlogo.png";

const footerData = {
  logo: LogoImg,
  formTitle: "Join a Newsletter",
  copyRightMsg: "© Jhone Doe 2022 all rights reserved.",
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
      message: "3485 Plainfield Avenue Syracuse, NY",
    },
    {
      icon: <RiPhoneFill fontSize={25} />,
      message: "(+1)123-456-7896",
    },
    {
      icon: <RiMailFill fontSize={25} />,
      message: "contact@johndoe.com",
    },
  ],
  socialLinks: [
    { icon: <BsFacebook />, link: "#" },
    { icon: <BsGithub />, link: "#" },
    { icon: <BsDribbble />, link: "#" },
    { icon: <BsBehance />, link: "#" },
  ],
};

export default footerData;
