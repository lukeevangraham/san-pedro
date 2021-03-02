import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import { getStrapiMedia } from "../../lib/media";

import classes from "./Footer.module.css";

const Footer = ({ data }) => (
  <footer className={classes.footer}>
    <div className={classes.bgImage}>
      <div className="row">
        {console.log("footer data: ", data)}
        <div className="col span-1-of-3">
          <div className={classes.column}>
            <div className={classes.horiLogo}>
              <Image
                src={getStrapiMedia(data.logo.url)}
                width={75}
                height={46}
              />
              <div className={classes.logoText}>
                <div>San Pedro</div>
                <div>Presbyterian Church</div>
              </div>
            </div>
            <ul>
              <li>
                <IoLocation /> 14900 San Pedro Ave, San Antonio, TX 78232
              </li>
              <li>
                <IoCall /> 210 494 6560
              </li>
              <li>
                <IoMail /> sppchurch@sppcsa.com
              </li>
            </ul>
            <div>Sunday service times: In-person @ 9:30am, Online @ 10am</div>
          </div>
        </div>
        <div className="col span-1-of-3">
          <h3>Useful Links</h3>
        </div>
        <div className="col span-1-of-3">
          <h3>Subscribe</h3>
        </div>
      </div>
      <div className={["row", classes.bottomRow].join(" ")}>
        <div className={`col span-2-of-3 ${classes.copyrightBlock}`}>
          Copyright &copy; {new Date().getFullYear()} All rights reserved | 
          <a href="http://grahamwebdesign.com" target="_blank">Graham Web Design</a> 
        </div>
        <div className="col span-1-of-3">Social Icons</div>
        {/* <div className="col span_6_of_12">
          <ul className={classes.footerNav}>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div> */}
        {/* <div className="col span_6_of_12">
          <ul className={classes.socialLinks}>
            <li>
              <a href="https://www.facebook.com/rbcpcpreschool" target="_blank">
                <img
                  src="/images/icons/logo-facebook.svg"
                  alt="Facebook Logo"
                />
              </a>
            </li>
          </ul>
        </div> */}
        {/* <div className="row">
          <p className={classes.footerP}>
            Copyright &copy; {new Date().getFullYear()} by San Pedro
            Presbyterian Church. All rights reserved.
          </p>
        </div> */}
      </div>
    </div>
  </footer>
);

export default Footer;
