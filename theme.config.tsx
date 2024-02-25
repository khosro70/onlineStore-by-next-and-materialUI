"use client";
import { vazirMatn } from "@/utils/fonts";
import { createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: vazirMatn.style.fontFamily,
  },
});

export default theme;
