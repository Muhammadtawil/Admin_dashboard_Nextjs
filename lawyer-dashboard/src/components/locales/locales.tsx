"use client";
import * as React from "react";

import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import * as locales from "@mui/material/locale";
import { TablePagination } from "@mui/material";

type SupportedLocales = keyof typeof locales;

export default function Locales() {
  const [locale, setLocale] = React.useState<SupportedLocales>("enUS");

  const theme = useTheme();

  const themeWithLocale = React.useMemo(
    () => createTheme(theme, locales[locale]),
    [locale, theme]
  );

  const handleLocaleChange = (
    event: React.MouseEvent<HTMLElement>,
    newLocale: SupportedLocales | null
  ) => {
    if (newLocale) {
      setLocale(newLocale);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <ThemeProvider theme={themeWithLocale}>
        <ToggleButtonGroup
          value={locale}
          exclusive
          onChange={handleLocaleChange}
          aria-label="Choose Locale"
        >
          <ToggleButton value="enUS">English</ToggleButton>
          <ToggleButton value="arSA">Arabic</ToggleButton>
        </ToggleButtonGroup>
        <TablePagination
          count={2000}
          rowsPerPage={10}
          page={1}
          component="div"
          onPageChange={() => {}}
        />
      </ThemeProvider>
    </Box>
  );
}
