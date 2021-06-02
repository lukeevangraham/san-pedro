import React from "react";
import { IoMenuOutline } from "react-icons/io5";

import classes from "./DrawerToggle.module.css";

const DrawerToggle = (props) => {
  let attachedClasses = [classes.newDrawerToggle];

  props.sticky ? attachedClasses.push(classes.Sticky) : null;

  return (
    <div className={attachedClasses.join(" ")} onClick={props.clicked}>
      {/* <div className={attachedClasses.join(" ")} onClick={props.clicked}> */}
      <IoMenuOutline />
      <div className={classes.menu}>Menu</div>
      {/* <div></div>
      <div></div>
      <div></div> */}
    </div>
  );
};

export default DrawerToggle;
