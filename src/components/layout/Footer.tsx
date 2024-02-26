import { Box } from "@mui/material";
import * as React from "react";
import FooterSection from "../modules/homePage/footer/FooterSection";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        padding: 2,
        background: "#c5cae9",
      }}
      dir="rtl"
    >
      <FooterSection />
      <FooterSection />
      <FooterSection />
    </Box>
  );
}
export default Footer;
