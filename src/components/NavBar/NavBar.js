import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [value, setValue] = useState(0);
  const routes = ["/", "/favorites"];
  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab component={Link} to={routes[0]} label="Home" index={0} component={Link} />

        <Tab component={Link} to={routes[1]} label="Favorites" index={1} />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
