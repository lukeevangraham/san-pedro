import React from "react";
import classes from "./Logo.module.css";
import Link from "next/link";
import Image from "next/image";

const Logo = (props) => {
  let attachedClasses = [
    classes.Logo,
    props.sticky ? classes.StickyLogo : classes.UnstickyLogo,
  ];

  // let renderLogo = props.logo ? (
  //   <img
  //     src={
  //       props.sticky
  //         ? `https://sanpedroadmin.lukegraham.us${props.logo.url}`
  //         : `https://sanpedroadmin.lukegraham.us${props.logoWhite.url}`
  //     }
  //     alt={props.logo.alternativeText}
  //   />
  // ) : (
  //   <div>Loading...</div>
  // );

  return (
    <div className={attachedClasses.join(" ")}>
      <Link href="/">
        <a>
          <div className={classes.imageParent}>
            <Image
              src={props.imageUrl}
              alt="San Pedro Presbyterian Church Logo"
              width={props.sticky ? 98 : 115}
              height={props.sticky ? 68 : 80}
            />
          </div>
          {/* <img
      src={props.imageUrl}
      alt="San Pedro Presbyterian Church Logo"
    /> */}
        </a>
      </Link>
    </div>
  );
};

export default Logo;
