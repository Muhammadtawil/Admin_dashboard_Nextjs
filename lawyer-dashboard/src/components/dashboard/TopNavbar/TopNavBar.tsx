import { AppBar, Toolbar, IconButton, Stack, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import CurrentDate from "./Date/CurrentDate";
import Profile from "./Profile/Profile";
import DarkAndLightMode from "../ControlPanelModal/DarkAndLightMode";
import LocaleSwitcher from "../locale/LocaleSwitcher";
import NotificationsComponent from "./notification/notificationsMain";


const TopNavbar = ({
  toogleActive,
 children,
}: {
  toogleActive: any;
    children: any;
  }) => {
  
  
  return (
    <>
      <div className="topNavbarDark">
        <AppBar
          color="inherit"
          sx={{
            backgroundColor: "#fff",
            boxShadow: "0px 4px 20px rgba(47, 143, 232, 0.07)",
            py: "6px",
            mb: "30px",
            position: "sticky",
          }}
          className="top-navbar-for-dark"
        >
          <Toolbar>
            <Tooltip title="Hide/Show" arrow>
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                onClick={toogleActive}
              >
                <i className="ri-align-left"></i>
              </IconButton>
            </Tooltip>
            <CurrentDate />
            {/* Search form */}
            {/* <SearchForm /> */}

            <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
           
            <Stack direction="row" spacing={2}>
              {/* CurrentDate */}
              <LocaleSwitcher />
           <DarkAndLightMode/>

              {/* Notification */}
              {children}

              {/* Profile */}
              <Profile
              
  
              />
            </Stack>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default TopNavbar;
