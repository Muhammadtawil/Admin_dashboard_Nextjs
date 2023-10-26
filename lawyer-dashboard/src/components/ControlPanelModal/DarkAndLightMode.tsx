"use client";
import React, { useState, useEffect } from "react";
import styles from "./DarkAndLightMode.module.css";
import { FormControlLabel, Switch, styled } from "@mui/material";
import { MaterialUISwitch } from "../shared/theme";

const DarkAndLightMode = () => {
  // Light/Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the user's preference from local storage
    const storedPreference = localStorage.getItem("theme");
    if (storedPreference === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Update the user's preference in local storage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Update the class on the <html> element to apply the selected mode
    const htmlElement = document.querySelector("html");
    if (isDarkMode) {
      htmlElement?.classList.add("dark");
    } else {
      htmlElement?.classList.remove("dark");
    }
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
          label=""
        />
      </div>
      <style>
        {`
          .darkModeBox h3 {
            color: ${isDarkMode ? '#AEAAA7' : 'var(--headingColor)'} !important;
          }
        `}
      </style>
    </>
  );
};

export default DarkAndLightMode;

