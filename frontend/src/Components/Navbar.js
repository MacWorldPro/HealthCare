import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// import { Dropdown } from '@mui/base/Dropdown';
// import { MenuButton } from '@mui/base/MenuButton';
// import { Menu } from '@mui/base/Menu';
// import { MenuItem } from '@mui/base/MenuItem';

import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import Logout from "./Logout";
import { Link, useLocation } from "react-router-dom";
import { ForkLeft } from "@mui/icons-material";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const location=useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setValue(0);
        break;
      case "/read":
        setValue(1);
        break;
      case "/tools":
      case "/predict-diabetes":
      case "/calculate-bmi":
        setValue(2);
        break;
      case "/doctors":
        setValue(3);
        break;
      case "/about":
        setValue(4);
        break;
      case "/support":
        setValue(5);
        break;
      default:
        setValue(false);
    }
  }, [location.pathname]);

  // Functions for navbar items
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // Functions for tools menu dropdown
  const [anchorEl, setAnchorEl] = useState(null);

  const handleToolsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    handleMenuClose();
    window.location.href = path;
  };

  return (
    <AppBar className="mt- rounded-full" color="transparent">
      <Toolbar variant="regular" className="flex justify-between backdrop-blur-[1px] rounded-full">
        <Link className="flex gap-5" to="/">
        <AddBusinessRoundedIcon className="scale-150" />
        <Typography>Vaidya</Typography>
        </Link>
        {isMatch ? (
          <>
            <DrawerComp />
          </>
        ) : (
          <>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab
                label="Home"
                href="/"
                className="hover:bg-slate-100 text-2xl hover:ease-in-out duration-500 "
              />
              <Tab
                label="Read"
                href="/read"
                className="hover:bg-slate-100 text-2xl hover:ease-in-out duration-500 "
              />
              <Tab
                label="Tools"
                onClick={handleToolsClick}
                className="hover:bg-slate-100 text-2xl hover:ease-in-out duration-500 "
              />

              <Tab
                label="Doctors"
                href="/doctors"
                className="hover:bg-slate-100 text-2xl hover:ease-in-out duration-500 "
              />
              <Tab
                label="About Us"
                href="/about"
                className="hover:bg-slate-100 text-2xl hover:ease-in-out duration-500" 
              />
              <Tab
                label="Support"
                href="/support"
                className="hover:bg-slate-100 text-2xl hover:ease-in-out duration-500 "
              />
            </Tabs>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => handleMenuItemClick("/predict-diabetes")}>
                Diabetes-Checker
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("/calculate-bmi")}>
                BMI-Checker
              </MenuItem>
            </Menu>

            <Button className="ml-auto" variant="contained">
              {isAuthenticated ? <Logout /> : <Login />}
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
