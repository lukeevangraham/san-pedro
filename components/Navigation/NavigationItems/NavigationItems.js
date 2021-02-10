import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  let renderNavLinks = props.navData ? (
    props.navData.links.map((navLink) => (
      <NavigationItem sticky={props.sticky} link={navLink.url} key={navLink.id}>
        {navLink.text}
      </NavigationItem>
    ))
  ) : (
    <div>no nav links</div>
  );

  return (
    <ul className={classes.NavigationItems}>
      {renderNavLinks}
      {/* <NavigationItem sticky={props.sticky} link="/about">
      About Us
    </NavigationItem>
    <NavigationItem sticky={props.sticky} link="/about">
      Media
    </NavigationItem>
    <NavigationItem sticky={props.sticky} link="/about">
      Family
    </NavigationItem>
    <NavigationItem sticky={props.sticky} link="/about">
      Contact
    </NavigationItem>
    <NavigationItem sticky={props.sticky} link="/about">
      Give
    </NavigationItem> */}
    </ul>
  );
};

export default navigationItems;
