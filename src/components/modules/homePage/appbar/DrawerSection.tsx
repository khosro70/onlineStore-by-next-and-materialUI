import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
// import ListInDrawer from "./ListInDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import MemoryIcon from "@mui/icons-material/Memory";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { Collapse, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function DrawerSection() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [opens, setOpens] = React.useState(false);

  const handleClick = () => {
    setOpens(!opens);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      {/* <ListInDrawer toggleDrawer={toggleDrawer} /> */}
      <List>
        <ListItem onClick={handleClick} sx={{ paddingBottom: 0 }}>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <MemoryIcon />
            </ListItemIcon>
            <ListItemText
              sx={{
                textAlign: "right",
              }}
              primary="کالای دیجیتال"
            />
            {opens ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={opens} timeout="auto" unmountOnExit>
          <List component="div" disablePadding onClick={toggleDrawer(false)}>
            <ListItemButton sx={{ pr: 8, textAlign: "right" }}>
              <ListItemText
                primary={<Typography variant="body2">لپ تاپ</Typography>}
              />
            </ListItemButton>
            <ListItemButton sx={{ pr: 8, textAlign: "right" }}>
              <ListItemText
                primary={<Typography variant="body2">موبایل</Typography>}
              />
            </ListItemButton>
            <ListItemButton sx={{ pr: 8, textAlign: "right" }}>
              <ListItemText
                primary={<Typography variant="body2">ساعت مچی</Typography>}
              />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />
        <ListItem onClick={toggleDrawer(false)}>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText
              sx={{
                textAlign: "right",
              }}
              primary="پوشاک"
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem onClick={toggleDrawer(false)}>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <BeenhereIcon />
            </ListItemIcon>
            <ListItemText
              sx={{
                textAlign: "right",
              }}
              primary="سلامتی و زیبایی"
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon
          sx={{
            color: "purple",
            marginLeft: 4,
            fontSize: 36,
            cursor: "pointer",
          }}
        />
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}
