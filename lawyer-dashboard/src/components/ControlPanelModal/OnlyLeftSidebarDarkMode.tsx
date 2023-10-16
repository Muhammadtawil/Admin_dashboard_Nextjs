import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import styles from "./DarkAndLightMode.module.css";
import { FormControlLabel } from "@mui/material";
import { MaterialUISwitch } from "../shared/theme";

const OnlyLeftSidebarDarkMode = () => {
  // Light/Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the user's preference from local storage
    const storedPreference = localStorage.getItem("leftSidebarTheme");
    if (storedPreference === "leftSidebarDark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Update the user's preference in local storage
    localStorage.setItem(
      "leftSidebarTheme",
      isDarkMode ? "leftSidebarDark" : "light"
    );

    // Update the class on the <leftSidebarDark> element to apply the selected mode
    const htmlElement = document.querySelector(".leftSidebarDark");
    htmlElement?.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <div className={styles.darkModeBox}>
        <FormControlLabel
          control={
            <MaterialUISwitch
              sx={{ m: 1 }}
              defaultChecked
              onClick={handleToggle}
            />
          }
          label={`Side Bar / ${isDarkMode ? "Light Mode" : "Dark Mode"}`}
        />
      </div>
    </>
  );
};

export default OnlyLeftSidebarDarkMode;
