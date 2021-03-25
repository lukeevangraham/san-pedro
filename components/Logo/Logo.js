import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./Logo.module.css";

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
          <div style={{ width: props.width, height: props.height }}>
            <Image
              src={props.imageUrl}
              alt="San Pedro Presbyterian Church Logo"
              layout="fill"
              objectFit="scale-down"
              objectPosition="left center"
              sizes="33vw"
              priority="true"
              loading="earger"
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
