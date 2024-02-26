"use client";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import * as React from "react";
import { Typography } from "@mui/material";

export default function BrandGroup() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ marginBottom: 1 }}>
      <Box>
        <Typography
          onClick={handleClick}
          variant="h6"
          sx={{
            color: "#e53935",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>برند محصول</span>
          <span>{open ? <ExpandLess /> : <ExpandMore />}</span>
        </Typography>
      </Box>

      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        sx={{ overflow: "hidden" }}
      >
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="اپل" />
          <FormControlLabel control={<Checkbox />} label="سامسونگ" />
          <FormControlLabel control={<Checkbox />} label="شیائومی" />
          <FormControlLabel control={<Checkbox />} label="هواوی" />
        </FormGroup>
      </Collapse>
    </Box>
  );
}
