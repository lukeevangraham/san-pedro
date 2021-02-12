import React from "react";

import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import Button from "../../UI/Button/Button";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import classNames from "classnames";

const Toolbar = (props) => {
  let attachedClasses = [classes.innerToolbar, "row"];
  console.log("sticky: ", props.sticky)
  // console.log("home: ", props.home)
  return (
    <header
      className={props.sticky ? classes.Sticky : classes.Toolbar}
    >
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo
            sticky={props.sticky}
            logo={props.navData.logo}
            logoWhite={props.navData.logoWhite}
          />
        </div>
        <DrawerToggle
          sticky={props.sticky}
          clicked={props.drawerToggleClicked}
        />
        <nav className={classNames(classes.DesktopOnly, classes.toolbarRight)}>
          <NavigationItems sticky={props.sticky} navData={props.navData} />
          {props.navData.button && (
            <div style={{ marginLeft: "40px" }}>
              <Button button={props.navData.button} />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Toolbar;
