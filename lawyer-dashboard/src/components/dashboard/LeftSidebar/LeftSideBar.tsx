"use client";
import { Box, ListItemIcon, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import getSidebarData from "./SidebarData";
import SubMenu from "./SubMenu";
import Link from "next/link";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import { signOut } from "next-auth/react";
import Logout from "@mui/icons-material/Logout";
import clicker from '../../../../public/mainLogo.png'
import Image from 'next/image'
import { useTranslations } from 'next-intl';




const SidebarNav = styled("nav")(({ theme }) => ({
  background: "#fff",
  boxShadow: "0px 4px 20px rgba(47, 143, 232, 0.07)",
  width: "300px",
  padding: "30px 10px",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  transition: "350ms",
  zIndex: "10",
  overflowY: "auto",
}));
const SidebarWrap = styled("div")(({ theme }) => ({
  width: "100%",
}));

const Sidebar = ({ toogleActive, closeSidebar }: any) => {
const sidebarData = getSidebarData(); 
const t = useTranslations('SideBar');
  const handleSidebarClose = () => {
    closeSidebar();
  };

  const data = JSON.stringify(sidebarData);
  return (
    <>
      <div className="leftSidebarDark">
        <SidebarNav className="LeftSidebarNav">
          <SidebarWrap>
            <Box
              sx={{
                mb: "20px",
                px: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Link href="/main">
                <Image
                  src={clicker}
                  alt="Clickers"
                  placeholder="blur"
                  quality="100"
                  height="100"
                  
                />
              </Link>

              <IconButton
                onClick={handleSidebarClose}
                size="small"
                sx={{
                  background: "rgb(253, 237, 237)",
                  display: { lg: "none" },
                }}
              >
                <ClearIcon />
              </IconButton>
            </Box>

            {sidebarData.map((item: any, index: any) => {
              return <SubMenu item={item} key={index} />;
            })}

            <div ></div>
            <MenuItem>
              <ListItemIcon
                sx={{ mr: "-8px", mt: "-3px" }}
                onClick={() => signOut({ redirect: true, callbackUrl: "/api/auth/signin" })}
              >
                <Logout fontSize="small" />
              </ListItemIcon>
            {  t('signOut')}
            </MenuItem>
          </SidebarWrap>


        </SidebarNav>
      </div>
    </>
  );
};

export default Sidebar;
