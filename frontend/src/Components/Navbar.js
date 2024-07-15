import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import Logout from "./Logout";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" className="bg-blue-900">
      <Toolbar className="flex justify-between">
        <AddBusinessRoundedIcon className="scale-150" />
        {isMatch ? (
          <>
            <Typography className="text-2xl pl-10">Shoppee</Typography>
            <DrawerComp />
          </>
        ) : (
          <>
            <Tabs
              className="ml-auto"
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <Tab label="Products" />
              <Tab label="Services" />
              <Tab label="About Us" />
              <Tab label="Contact" />
            </Tabs>
            <Button className="ml-auto" variant="contained">
              {isAuthenticated ? <Logout /> : <Login />}
            </Button>
            <Button className="ml-2" variant="contained">
              SignUp
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
