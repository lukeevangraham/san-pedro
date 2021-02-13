import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

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
          <div
            className={classes.homeHeader}
            style={{
              backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(https://sanpedroadmin.lukegraham.us${props.children.props.homeData.contentSections[0].picture.url})`,
            }}
          >
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
        <Waypoint
          topOffset={"-100px"}
          onLeave={() => setMakeNavSticky(true)}
          onEnter={() => setMakeNavSticky(false)}
        >
        <div>
          <Toolbar
            sticky={makeNavSticky}
            drawerToggleClicked={sideDrawerToggleHandler}
            navData={navbar}
          />
        </div>
        </Waypoint>
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
