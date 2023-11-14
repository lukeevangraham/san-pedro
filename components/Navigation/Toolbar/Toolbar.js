import React from "react";
import { getStrapiMedia } from "../../../lib/media";
import Logo from "../../Logo/Logo";
import Image from "next/image";
import Button from "../../UI/Button/Button";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import classNames from "classnames";

import classes from "./Toolbar.module.scss";

const Toolbar = (props) => {
  let attachedClasses = [classes.innerToolbar, "row"];

  return (
    <header
      className={
        props.sticky
          ? classes.Sticky
          : props.home
          ? classes.Toolbar
          : [classes.Toolbar, classes.notHome].join(" ")
      }
    >
      <div className={attachedClasses.join(" ")}>
        {/* <div className={classes.Logo}>
          <Image
            src={getStrapiMedia(props.navData.logo.url)}
            layout="fill"
            objectFit="contain"
            objectPosition="left top"
            className={classes.image}
          />
        </div> */}
        <div className={classes.Logo}>
          <Logo
            sticky={props.sticky}
            imageUrl={
              props.sticky
                ? getStrapiMedia(props.navData.logo.url)
                : getStrapiMedia(props.navData.logoWhite.url)
            }
            width={props.sticky ? 75 : 115}
            height={props.sticky ? 52 : 80}
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
