import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IoCall,
  IoLocation,
  IoMail,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoYoutube,
  IoCaretForward,
} from "react-icons/io5";
import { getStrapiMedia } from "../../lib/media";

import classes from "./Footer.module.css";

const Footer = ({ data }) => (
  <footer>
    <div
      className={classes.footer}
      style={{
        backgroundImage: `linear-gradient(to bottom right, #752017de, #4f161079),
    url(${data.bgImage.url})`,
      }}
    >
      <div className={classes.bgImage}>
        <div className="row">
          {console.log("footer data: ", data)}
          <div className={`col span-1-of-${data.columns.length + 1}`}>
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
                  <IoLocation /> {data.streetAddress}
                </li>
                <li>
                  <IoCall /> {data.phone}
                </li>
                <li>
                  <IoMail /> {data.email}
                </li>
              </ul>
              <div>{data.smallText}</div>
            </div>
          </div>
          {data.columns.map((column, index, array) => (
            <div
              className={`col span-1-of-${array.length + 1} ${
                classes.linkColumn
              } ${classes.column}`}
            >
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li>
                    {" "}
                    <IoCaretForward />
                    <Link href={link.url}>
                      <a>{link.text}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* <div className="col span-1-of-3">
            <h3>Subscribe</h3>
          </div> */}
        </div>
        <div className={["row", classes.bottomRow].join(" ")}>
          <div className={`col span-2-of-3 ${classes.copyrightBlock}`}>
            Copyright &copy; {new Date().getFullYear()} All rights reserved |
            <a href="http://grahamwebdesign.com" target="_blank">
              Graham Web Design
            </a>
          </div>
          <div className="col span-1-of-3">
            <div className={classes.socialIcons}>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/SanPedroPresbyterianChurch"
                    target="_blank"
                  >
                    <IoLogoFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/SanPedroPres" target="_blank">
                    <IoLogoTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCvIdCpNuCMjS0JAkHvZqbkA"
                    target="_blank"
                  >
                    <IoLogoYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
    </div>
  </footer>
);

export default Footer;
