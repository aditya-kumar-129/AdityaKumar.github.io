import classes from "./MainNavigation.module.css";
import { useState } from "react";
import Media from "react-media";
import NavLinks from "../NavLinks/NavLinks";
import SideDrawer from "../SideDrawer/SideDrawer";
import Burger from "../Burger/Burger";
import BtnToggleTheme from "../../BtnToggleTheme/BtnToggleTheme";
import Logo from "../../Logo/Logo";

const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <Logo className={classes.desktop} />
      <nav className={classes.desktop}>
        <NavLinks />
        {/* <BtnToggleTheme /> */}
      </nav>

      {/* <Media query={{ maxWidth: 1024 }}>
        {() => (
          <>
            <Burger onClick={toggleDrawer} />
            <Logo className={classes.mobile} />
            <BtnToggleTheme className={classes.mobile} />
          </>
        )}
      </Media> */}

      <SideDrawer show={isDrawerOpen} onClose={toggleDrawer}>
        <nav className={classes.navigationDrawerNav}>
          <NavLinks />
        </nav>
      </SideDrawer>
    </>
  );
};

export default MainNavigation;
