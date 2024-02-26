import * as React from "react";
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

interface ListInDrawerPropsInterface {
  toggleDrawer: (arg0: boolean) => void;
}

const ListInDrawer: React.FC<ListInDrawerPropsInterface> = ({
  toggleDrawer,
}) => {
  const [opens, setOpens] = React.useState(false);

  const handleClick = () => {
    setOpens(!opens);
  };
  return (
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
        <List
          component="div"
          disablePadding
          onClick={() => toggleDrawer(false)}
        >
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
      <ListItem onClick={() => toggleDrawer(false)}>
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
      <ListItem onClick={() => toggleDrawer(false)}>
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
  );
};

export default ListInDrawer;
