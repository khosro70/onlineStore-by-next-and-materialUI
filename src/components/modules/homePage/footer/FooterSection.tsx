import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import * as React from "react";

const FooterSection: React.FC = () => {
  return (
    <Box>
      <List
        sx={{
          bgcolor: "background.paper",
          "& .MuiListItemButton-root:hover": {
            "& .MuiListItemIcon-root": {},
            color: "red",
          },
          backgroundColor: "#c5cae9",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            sx={{
              fontWeight: "bold",
              fontSize: 20,
              backgroundColor: "#c5cae9",
              textAlign: { xs: "center", sm: "right" },
            }}
            component="div"
            id="nested-list-subheader"
          >
            با دیجی تایز
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemText
            disableTypography
            sx={{
              textAlign: { xs: "center", sm: "right" },
              fontSize: { xs: 16, sm: 14, md: 16 },
            }}
            primary="فروش در دیجی تایز"
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemText
            disableTypography
            sx={{
              textAlign: { xs: "center", sm: "right" },
              fontSize: { xs: 16, sm: 14, md: 16 },
            }}
            primary="فرصت های شغلی"
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemText
            disableTypography
            sx={{
              textAlign: { xs: "center", sm: "right" },
              fontSize: { xs: 16, sm: 14, md: 16 },
            }}
            primary="گزارش تخلف در دیجی تایز"
          />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default FooterSection;
