"use client";

import { useTranslations } from "next-intl";

const getContactData = () => {
  const t=useTranslations('webFooter')
  return {
    heroSection: {
      title1: "About My",
      title2: "Contact",
    },
    getInTouch: {
      title: "Get in Touch",
      offices: "Our Offices",
      firstAddress: {
        title: t('Main'),
        address: t('address'),
        phone: "(+961)03-339-199",
        email: "Ghazallawfirm@gmail.com",
        workHours:""
      },
      secondAddress: {
        title: t('branch'),
        address: t('address2'),
        phone: "(+961)03-339-199",
        email: "Ghazallawfirm@gmail.com",
        workHours:""

      },
    },
    contactForm: {
      title1: "Let's Talk",
      title2: "With Us",
      details1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere, ex et eleifend volutpat, ipsum erat viverra lorem, eu egestas ante turpis vitae nisl. Nulla ornare urna euismod, dignissim nisl eu, pretium odio.",
      details2:
        "Sed ut mollis sem. Duis in rhoncus ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin euismod lorem purus, ac malesuada dui dignissim in.",
      details3:
        "Nulla mauris felis, accumsan feugiat congue non, sollicitudin non dui. Aliquam ac suscipit nisi. Nulla ac sapien dui. Praesent consequat rutrum diam, ac tristique risus volutpat ac. Nulla facilisi. Quisque in lacus et leo placerat interdum et a dui.",
    },
    maps: {
      title: "Office Address",
      address: "Dhaka Ring Road - Dhaka,Bangladesh",
    },
  };
};

export default getContactData;
