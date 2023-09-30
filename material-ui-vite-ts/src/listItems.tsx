import * as React from "react";
import { Link } from "react-router-dom";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard"; 
import PeopleIcon from "@mui/icons-material/People"; 
import ListIcon from '@mui/icons-material/List';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TimerIcon from '@mui/icons-material/Timer';

export const mainListItems = (
  <React.Fragment>
    {[
      {
        text: "Dashboard",
        to: "",
        icon: <DashboardIcon />,
      },
      {
        text: "Todos",
        to: "todos",
        icon: <ListIcon />,
      },
      {
        text: "Employees",
        to: "employees",
        icon: <PeopleIcon />,
      },
      {
        text: "Products",
        to: "products",
        icon: <ProductionQuantityLimitsIcon />,
      },
      {
        text: "Blank Page",
        to: "blank_page",
        icon: <ContentCopyIcon />,
      },
      {
        text: "Counter",
        to: "counter",
        icon: <TimerIcon />,
      } 
    ].map((item) => (
      <ListItemButton key={item.text} component={Link} to={item.to}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    ))}
  </React.Fragment>
);
