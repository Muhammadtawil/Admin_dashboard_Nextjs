"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import DarkAndLightMode from "./DarkAndLightMode";
import OnlyLeftSidebarDarkMode from "./OnlyLeftSidebarDarkMode";
import OnlyTopNavbarDark from "./OnlyTopNavbarDark";
import RTLSwitch from "./RTLSwitch";

export default function ControlPanelModal() {
  const [isActiveSearchModal, setActiveSearchModal] = useState(true);
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  return (
    <>
      <div
        className={`control-panel-modal ${isActiveSearchModal ? "" : "show"}`}
      >
        <Tooltip title="Control Panel" placement="left" arrow>
          <div className="settings-btn" onClick={handleToggleSearchModal}>
            <i className="ri-settings-3-line"></i>
          </div>
        </Tooltip>

        <div className="control-panel-dialog">
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleToggleSearchModal}
                aria-label="close"
              >
                <CloseIcon sx={{ color: "#fff !important" }} />
              </IconButton>

              <Typography
                sx={{
                  flex: 1,
                  color: "#fff !important",
                }}
                variant="h6"
                component="div"
                className="ml-2"
              >
                Control Panel
              </Typography>
            </Toolbar>
          </AppBar>

          <Box p={3} className="control-panel-content">
            {/* DarkAndLightMode */}
            <DarkAndLightMode />

            {/* OnlyLeftSidebarDarkMode */}
            <OnlyLeftSidebarDarkMode />

            {/* OnlyTopNavbarDark */}
            <OnlyTopNavbarDark />

            {/* RTLSwitch */}
            <RTLSwitch />
          </Box>

          <div className="control-panel-footer">
            <Button
              onClick={handleToggleSearchModal}
              variant="contained"
              color="error"
              sx={{
                textTransform: "capitalize",
                color: "#fff !important",
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
