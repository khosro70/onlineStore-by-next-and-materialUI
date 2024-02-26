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

export default function ColorGroup() {
  const [opens, setOpens] = React.useState(false);

  const handleClicks = () => {
    setOpens(!opens);
  };
  return (
    <Box>
      <Box>
        <Typography
          onClick={handleClicks}
          variant="h6"
          sx={{
            color: "#e53935",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>رنگ</span>
          <span>{opens ? <ExpandLess /> : <ExpandMore />}</span>
        </Typography>
      </Box>

      <Collapse
        in={opens}
        timeout="auto"
        unmountOnExit
        sx={{ overflow: "hidden" }}
      >
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="قرمز" />
          <FormControlLabel control={<Checkbox />} label="صورتی" />
          <FormControlLabel control={<Checkbox />} label="سبز" />
          <FormControlLabel control={<Checkbox />} label="آبی" />
        </FormGroup>
      </Collapse>
    </Box>
  );
}
