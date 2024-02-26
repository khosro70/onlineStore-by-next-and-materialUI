import * as React from "react";
import { Box, Typography } from "@mui/material";
import { categoryInTopHomePage } from "@/utils/constants";

export default function MainContentFilter() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        gap: 3,
        borderRadius: 1,
        padding: 1,
        border: "1px solid #eeeeee",
        cursor: "pointer",
        backgroundColor: "#fafafa",
        marginBottom: 2, 
      }}
    >
      {categoryInTopHomePage.map((i) => (
        <Box
          key={i.title}
          sx={{
            color: "#37474f",
            "& :hover": {
              opacity: 0.6,
            },
          }}
        >
          <Typography>{i.title}</Typography>
        </Box>
      ))}
    </Box>
  );
}
