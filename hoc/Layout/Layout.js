import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

import Image from "next/image";
import classes from "./Layout.module.css";
import Aux from "../Aux/Aux";
import NotificationBanner from "../../components/UI/NotificationBanner/NotificationBanner";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";
import Sections from "../../components/sections/sections";

const Layout = (props) => {
  const { navbar, notificationBanner } = props.global;

  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [makeNavSticky, setMakeNavSticky] = useState(false);
  const [bannerIsShown, setBannerIsShown] = useState(true);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <Aux>
      {notificationBanner && bannerIsShown && (
        <NotificationBanner
          data={notificationBanner}
          closeSelf={() => setBannerIsShown(false)}
        />
      )}

      {props.home ? (
        <Waypoint
          topOffset={"65px"}
          onLeave={() => setMakeNavSticky(true)}
          onEnter={() => setMakeNavSticky(false)}
        >
          <div className={classes.homeHeader}>
            {console.log(
              "here: ",
              props.children.props.homeData.contentSections[0].picture.url
            )}
            <Image
              src={props.children.props.homeData.contentSections[0].picture.url}
              alt={
                props.children.props.homeData.contentSections[0].picture
                  .alternativeText
              }
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              className={classes.heroBgImage}
            />

            <Toolbar
              sticky={makeNavSticky}
              drawerToggleClicked={sideDrawerToggleHandler}
              navData={navbar}
              home={true}
            />
            <Sections
              sections={[props.children.props.homeData.contentSections[0]]}
              home
            />
          </div>
        </Waypoint>
      ) : (
        <div>
          <Toolbar
            sticky={makeNavSticky}
            drawerToggleClicked={sideDrawerToggleHandler}
            navData={navbar}
          />
          <Waypoint
            onLeave={() => setMakeNavSticky(true)}
            onEnter={() => setMakeNavSticky(false)}
          ></Waypoint>
        </div>
      )}
      <SideDrawer
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
        navData={navbar}
      />
      <main className={classes.Content}>{props.children}</main>
      <Footer />
    </Aux>
  );
};

export default Layout;
