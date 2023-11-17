"use client"
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import style from "./Navbar.module.scss";
import { usePathname, useRouter } from "next/navigation";
import NavbarData from "./navbarData";
import { useTranslations } from "next-intl";
import { useLongPress } from "use-long-press";
import LocaleSwitcher from "@/components/dashboard/locale/LocaleSwitcher";
import DarkAndLightMode from "@/components/dashboard/ControlPanelModal/DarkAndLightMode";
import { Stack } from "@mui/material";

const NavBar = () => {
  const navbarData = NavbarData();
  const [longClick, setLongClick] = useState(false);
  const router = useRouter();
  const t = useTranslations('webMainPage');
  const [enabled, setEnabled] = useState(true);
  const callback = useCallback((event: any) => {
    router.push("/en/dashboard/login");
  }, []);
  const bind = useLongPress(enabled ? callback : null, {
    onStart: (event) => console.log("Press started"),
    onFinish: (event) => router.push("/en/dashboard/login"),
    onCancel: (event) => console.log("Press cancelled"),
    onMove: (event) => console.log("Detected mouse or touch movement"),
    filterEvents: (event) => true,
    threshold: 5000,
    captureEvent: true,
  });

  let clickTimer: string | number | NodeJS.Timeout | undefined;

  const handleTitleMouseDown = () => {
    // Start a timer to detect long click (5 seconds)
    clickTimer = setTimeout(() => {
      setLongClick(true);
      // After 5 seconds, navigate to the login page
      router.push("/en/dashboard/login");
    }, 5000);
  };

  const handleTitleMouseUp = () => {
    clearTimeout(clickTimer);
    if (!longClick) {
      router.push("/");
    }
  };

  const routerPath = usePathname();
  // State for menu expand and unexpand control
  const [expand, setExpand] = useState(true);

  // Navbar sticky state
  const [stickyState, setStickyState] = useState(false);
  // Navbar ref and extra div height

  const [height, setHeight] = useState(102);

  // Track window scroll
  const stickyHandler = (e:any) => {
    const scrollTop = window.scrollY;
    scrollTop >= 100 ? setStickyState(true) : setStickyState(false);
  };
  // Track navbar height depend on window size
  const navbarHeightHandler = () => {

  };

  // Track window scroll
  useEffect(() => {
    window.addEventListener("scroll", stickyHandler);
    return () => {
      window.removeEventListener("scroll", stickyHandler);
    };
  });
  // Track window width
  useEffect(() => {
    // Add event listener
    window?.addEventListener("resize", navbarHeightHandler);
    // Remove event listener on cleanup
    return () => window?.removeEventListener("resize", navbarHeightHandler);
  }, []);
  return (
    <>
      {stickyState && <div style={{ height: height }} className="w-100"></div>}
      <Navbar
     
        className={`${stickyState && "navbarStickyStyle"} ${style.navbarStyle}`}
        collapseOnSelect
        expand="md"
      >
        <Container className="position-relative">
          {/* Navbar logo start */}
          <Link {...bind()} href="/" >

          <Navbar.Brand className="logo">
              <Image
                src={navbarData?.logo}
                alt="logo"
                width={200}
                onMouseDown={handleTitleMouseDown}
                onMouseUp={handleTitleMouseUp} />
          
          </Navbar.Brand>
            </Link>

          {/* Navbar logo end */}
          <Navbar.Toggle
            onClick={() => setExpand(!expand)}
            className="toggleBtn"
            aria-controls="responsive-navbar-nav"
          >
            {expand ? <CgMenuRight /> : <IoMdClose />}
          </Navbar.Toggle>
          {/* Navbar menu start */}
          <Navbar.Collapse
            className="menuItemContainer"
            id="responsive-navbar-nav"
          >
            <Nav className="ms-auto menuItems">
              {navbarData?.menus?.map((data, index) => (
                <span
                  key={index}
                  className={routerPath === data?.link ? "active" : ""}
                >
                  <Nav.Link as={Link} href={data?.link}>
                    {data?.name}
                  </Nav.Link>
                </span>
              ))}
            
            </Nav>
            <Stack direction="row" spacing={2}>
                {/* <div className="others-options">
                <Link href="#booking" className="default-btn">
                  Booking <i className="bx bx-log-in-circle"></i>
                </Link>
              </div> */}
                <DarkAndLightMode />
                <LocaleSwitcher />

              </Stack>
          </Navbar.Collapse>
          {/* Navbar menu end */}
        </Container>
   
      </Navbar>

   

    </>
  );
};

export default NavBar;
