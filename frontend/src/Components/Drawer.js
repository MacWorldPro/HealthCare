import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const pages = [
  {
    text:"Home",
    link:"/"
  },
  {
    text:"Read",
    link:"/read"
  },
  {
    text:"Tools",
    link:"/tools"
  },
  {
    text:"Doctors",
    link:"/doctors"
  },
  {
    text:"About Us",
    link:"/about"
  },
  {
    text:"Support",
    link:"/support"
  },
];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton href={page.link} key={index}>
              <ListItemIcon>
                <ListItemText>{page.text}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;