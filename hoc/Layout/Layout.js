import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import { getStrapiMedia } from "../../lib/media";

import Image from "next/image";
import classes from "./Layout.module.scss";
import Aux from "../Aux/Aux";
import NotificationBanner from "../../components/UI/NotificationBanner/NotificationBanner";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";
import Sections from "../../components/sections/sections";
import HomeHero from "../../components/sections/HomeHero/HomeHero";
import HomeHeroB from "../../components/sections/HomeHero/HomeHeroB/HomeHeroB";
import HomeHeroC from "../../components/sections/HomeHero/HomeHeroC/HomeHeroC";

const Layout = (props) => {
  const { navbar, notificationBanner, footer } = props.global;

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
            <div className={classes.Fixed}>
              {props.videoTest ? (
                <video
                  autoPlay
                  loop
                  muted
                  className={classes.heroBgVideo}
                  playsInline
                >
                  <source src="https://res.cloudinary.com/diqgdacjy/video/upload/v1699661747/sanPedro/coverr_flicking_through_bible_pages_3558_1080p_21225c5ae5.mp4" />
                </video>
              ) : props.homeData.homeHero.picture.provider_metadata
                  .resource_type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  className={classes.heroBgVideo}
                  playsInline
                >
                  <source src={props.homeData.homeHero.picture.url} />
                </video>
              ) : (
                <Image
                  src={props.homeData.homeHero.picture.url}
                  alt={props.homeData.homeHero.picture.alternativeText}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center center"
                  className={classes.heroBgImage}
                />
              )}
            </div>

            <Toolbar
              sticky={makeNavSticky}
              drawerToggleClicked={sideDrawerToggleHandler}
              navData={navbar}
              home={true}
            />
            {/* <Sections
              sections={[props.homeData.contentSections[0]]}
              home
            /> */}
            {props.home === "b" ? (
              <HomeHeroB data={props.homeData.homeHero} />
            ) : props.home === "c" ? (
              <HomeHeroC data={props.homeData.homeHero} />
            ) : (
              <HomeHero data={props.homeData.homeHero} />
            )}
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
            topOffset={makeNavSticky ? 0 : "65px"}
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
      <main
        className={
          makeNavSticky && !props.home
            ? `${classes.Content} ${classes.stickyContent}`
            : classes.Content
        }
      >
        {props.children}
      </main>
      <Footer data={footer} />
    </Aux>
  );
};

export default Layout;
