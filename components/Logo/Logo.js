import React from "react";
import classes from "./Logo.module.css";
import Link from "next/link";

const Logo = (props) => {
  let attachedClasses = [
    classes.Logo,
    props.sticky ? classes.StickyLogo : classes.UnstickyLogo,
  ];

  let renderLogo = props.logo ? (
    <img
      src={
        props.sticky
          ? `https://sanpedroadmin.lukegraham.us${props.logo.url}`
          : `https://sanpedroadmin.lukegraham.us${props.logoWhite.url}`
      }
      alt={props.logo.alternativeText}
    />
  ) : (
    <div>Loading...</div>
  );

  return (
    <div className={attachedClasses.join(" ")}>
      <Link href="/">
        <a>{renderLogo}</a>
      </Link>
    </div>
  );
};

export default Logo;
