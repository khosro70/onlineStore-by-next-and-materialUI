import * as React from "react";
import theme from "../../../../../theme.config";
import { Box, Link, Typography } from "@mui/material";
import DegitalMenu from "./DegitalMenu";

export default function MenuItems() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
      }}
    >
      <DegitalMenu />

      <Link
        sx={{
          my: 2,
          color: "black",
          textDecoration: "none",
          display: { xs: "none", md: "block" },
          cursor: "pointer",
          "& .MuiTypography-root": {
            fontWeight: theme.typography.fontWeightBold,
            fontSize: 18,
          },
          "&:hover": {
            opacity: 0.6,
          },
        }}
      >
        <Typography>پوشاک</Typography>
      </Link>
      <Link
        sx={{
          my: 2,
          color: "black",
          display: { xs: "none", md: "block" },
          textDecoration: "none",
          cursor: "pointer",
          "& .MuiTypography-root": {
            fontWeight: theme.typography.fontWeightBold,
            fontSize: 18,
          },
          "&:hover": {
            opacity: 0.6,
          },
        }}
      >
        <Typography>سلامتی</Typography>
      </Link>
    </Box>
  );
}
