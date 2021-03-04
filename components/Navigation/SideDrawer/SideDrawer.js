import React from "react";
import { getStrapiMedia } from "../../../lib/media";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Button from "../../UI/Button/Button";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}>
        <Logo
            sticky={props.sticky}
            imageUrl={getStrapiMedia(props.navData.logo.url)}
            width={115}
            height={80}
          />
        </div>
        <nav>
          <NavigationItems navData={props.navData} />
          {props.navData.button && (
            <div style={{ marginTop: ".5rem" }}>
              <Button button={props.navData.button} />
            </div>
          )}
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
