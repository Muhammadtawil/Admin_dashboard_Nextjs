"use client";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import styles from "./SubMenu.module.css";
import { usePathname } from "next/navigation";

const SidebarLabel = styled("span")(({ theme }) => ({
  position: "relative",
  top: "-3px",
}));

const SubMenu = ({ item }: any) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  // const [currentPath, setCurrentPath] = useState("");
  const router = usePathname();

  // useEffect(() => {
  //   setCurrentPath(router);
  // }, [router]);
  const currentPath = router.startsWith("/en/") ? "/en" : "/ar"; // Assuming language prefix based on your setup

  return (
    <>
      <Link
        as={`${currentPath}${item.path}`}
        replace
        href={`${currentPath}${item.path}`}
        onClick={item.subNav && showSubnav}
        className={`${styles.sidebarLink} ${
          router === `${currentPath}${item.path}` && "sidebarLinkActive"
        }`}
      >
        <div>
          {item.icon && (
            <item.icon /> // Render the icon component
          )}
          <SidebarLabel className="ml-1">{item.title}</SidebarLabel>
        </div>

        <div>
          {item.subNav && subnav
            ? item.iconOpened && (
                <item.iconOpened /> // Render the opened icon component
              )
            : item.subNav
            ? item.iconClosed && (
                <item.iconClosed /> // Render the closed icon component
              )
            : null}
        </div>
      </Link>
      {subnav &&
        item.subNav.map((subItem: any, index: any) => {
          return (
            <Link
              href={subItem.path}
              key={index}
              className={`${styles.sidebarLink2} ${
                currentPath == subItem.path && "sidebarLinkActive2"
              }`}
            >
              {subItem.icon && (
                <subItem.icon /> // Render the sub-item icon component
              )}
              {subItem.title}
            </Link>
          );
        })}
    </>
  );
};

export default SubMenu;
