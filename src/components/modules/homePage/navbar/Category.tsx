import { categoryInNavbar } from "@/utils/constants";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import * as React from "react";
import { Typography } from "@mui/material";

export default function Category() {
  return (
    <Box>
      <Typography variant="h6" sx={{ color: "#e53935", fontWeight: "bold" }}>
        دسته بندی
      </Typography>
      <List>
        {categoryInNavbar.map((i) => (
          <ListItemButton key={i.title}>
            <ListItemIcon sx={{ minWidth: 36 }}>{i.icon}</ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: "14px", textAlign: "right" }}
              primary={i.title}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
