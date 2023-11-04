// "use client";
// import React, { useState, useCallback, useEffect } from "react";
// import Link from "next/link";
// import { useLongPress } from "use-long-press";
// import { useRouter } from "next/navigation";
// import { Stack } from "@mui/material";
// import DarkAndLightMode from "@/components/ControlPanelModal/DarkAndLightMode";
// import LocaleSwitcher from "@/components/locale/LocaleSwitcher";
// import { useTranslations } from "next-intl";
// import Image from 'next/image'
// const Navbar = () => {
//   const [currentPath, setCurrentPath] = useState("");
//   const [longClick, setLongClick] = useState(false);
//   const [menu, setMenu] = React.useState(true);
//   const [isSmallNavbar, setIsSmallNavbar] = useState(false);
//   const router = useRouter();
//   const t = useTranslations('webMainPage');

//   const [enabled, setEnabled] = useState(true);
//   const callback = useCallback((event: any) => {
//     router.replace("../api/auth/signin");
//   }, []);
//   const bind = useLongPress(enabled ? callback : null, {
//     onStart: (event) => console.log("Press started"),
//     onFinish: (event) => router.replace("../api/auth/signin"),
//     onCancel: (event) => console.log("Press cancelled"),
//     onMove: (event) => console.log("Detected mouse or touch movement"),
//     filterEvents: (event) => true,
//     threshold: 5000,
//     captureEvent: true,
//   });

//   let clickTimer: string | number | NodeJS.Timeout | undefined;

//   const handleTitleMouseDown = () => {
//     // Start a timer to detect long click (5 seconds)
//     clickTimer = setTimeout(() => {
//       setLongClick(true);
//       // After 5 seconds, navigate to the login page
//       router.replace("../api/auth/signin");
//     }, 5000);
//   };

//   const handleTitleMouseUp = () => {
//     clearTimeout(clickTimer);
//     if (!longClick) {
//       router.push("/");
//     }
//   };

//   const toggleNavbar = () => {
//     setMenu(!menu);
//     setIsSmallNavbar(true);
//   };

//   React.useEffect(() => {
//     let elementId = document.getElementById("navbar");
//     document.addEventListener("scroll", () => {
//       if (elementId) {
//         if (window.scrollY > 150) {
//           elementId.classList.add("is-sticky");
//         } else {
//           elementId.classList.remove("is-sticky");
//         }
//       }
//     });
//   });

//   const classOne = menu
//     ? "collapse navbar-collapse mean-menu"
//     : "collapse navbar-collapse show";
//   const classTwo = menu
//     ? "navbar-toggler navbar-toggler-right collapsed"
//     : "navbar-toggler navbar-toggler-right";

//   const toggleSmallNavbar = () => {
//     const isSmall = window.innerWidth <= 300;
//     setIsSmallNavbar(isSmall);
//   };

//   useEffect(() => {
//     toggleSmallNavbar();
//     window.addEventListener("resize", toggleSmallNavbar);
//     return () => {
//       window.removeEventListener("resize", toggleSmallNavbar);
//     };
//   }, []);

//   const navbarClass = isSmallNavbar ? "small-navbar" : "";

//   return (
//     <>
//       <div id="navbar" className={`navbar-area fixed-top ${navbarClass}`}>
//         <nav className="navbar navbar-expand-md navbar-light">
//           <div className="container">
//             <Link {...bind()} href="/" className="navbar-brand">
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <Image
//                   src="/logo-main.png"
//                   width={isSmallNavbar ? 50 : 200}
//                   height={100}
//                   alt="Picture of the author"
//                   onMouseDown={handleTitleMouseDown}
//                   onMouseUp={handleTitleMouseUp}
//                 />
//                 {/* <h1 style={{ fontFamily: 'Agbalumo', color: 'white', marginLeft: '10px' }}>LawFirm</h1> */}
//               </div>
//             </Link>
//             {/* The rest of your navbar code */}            {/* Toggle navigation */}
//             <button
//               onClick={toggleNavbar}
//               className={classTwo}
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="icon-bar top-bar"></span>
//               <span className="icon-bar middle-bar"></span>
//               <span className="icon-bar bottom-bar"></span>
//             </button>

//             <div className={classOne} id="navbarSupportedContent">
//               <ul className="navbar-nav m-auto">
//                 <li className="nav-item">
//                   <Link
//                     href="#main"
//                     className={`nav-link ${currentPath == "/" && "active"} servicesHead`}
//                   >
//                     {t('home')}
//                   </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link
//                     href="#about"
//                     className={`nav-link ${currentPath == "/about-1/" && "active"
//                       } servicesHead`}
//                   >
//                     {t('about')}
//                     <i className="bx "></i>
//                   </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link
//                     href="#services"
//                     className={`nav-link ${currentPath == "/services/" && "active"
//                       }servicesHead`}
//                   >
//                     {t('services')} <i className="bx "></i>
//                   </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link
//                     href="#blogs"
//                     className={`nav-link ${currentPath == "/blogs/" && "active"
//                       } servicesHead`}
//                   >
//                     {t('blogs')} <i className="bx "></i>
//                   </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link
//                     href="#news"
//                     className={`nav-link ${currentPath == "/news/" && "active"
//                       } servicesHead`}
//                   >
//                     {t('news')} <i className="bx "></i>
//                   </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link
//                     href="#contact"
//                     className={`nav-link ${currentPath == "/contact/" && "active"
//                       } servicesHead`}
//                   >
//                     {t('contact')} <i className="bx  servicesHead"></i>
//                   </Link>
//                 </li>
//               </ul>

//               <Stack direction="row" spacing={2}>
//                 {/* <div className="others-options">
//                 <Link href="#booking" className="default-btn">
//                   Booking <i className="bx bx-log-in-circle"></i>
//                 </Link>
//               </div> */}
//                 <DarkAndLightMode />
//                 <LocaleSwitcher />

//               </Stack>


//             </div>  </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar;
