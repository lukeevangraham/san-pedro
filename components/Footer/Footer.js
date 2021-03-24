import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IoCall,
  IoLocation,
  IoMail,
  IoLogoFacebook,
  IoLogoLinkedin,
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
          <div className={`col span-1-of-${data.columns.length + 1}`}>
            <div className={classes.column}>
              <Link href="/">
                <a>
                  <div className={classes.horiLogo}>
                    <Image
                      src={getStrapiMedia(data.logo.url)}
                      alt={data.logo.alternativeText}
                      width={75}
                      height={46}
                    />
                    <div className={classes.logoText}>
                      <div>San Pedro</div>
                      <div>Presbyterian Church</div>
                    </div>
                  </div>
                </a>
              </Link>
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
              key={column.id}
            >
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.id}>
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
            <div>
              Copyright &copy; {new Date().getFullYear()} All rights reserved
            </div>
            <div>{" | "}</div>
            <div>
              <a href="http://grahamwebdesign.com" target="_blank">
                Graham Web Design
              </a>
            </div>
          </div>
          <div className="col span-1-of-3">
            <div className={classes.socialIcons}>
              <ul>
                <li>
                  <a aria-label="San Pedro Presbyterian Church Facebook Page"
                    href="https://www.facebook.com/SanPedroPresbyterianChurch"
                    target="_blank"
                  >
                    <IoLogoFacebook />
                  </a>
                </li>
                <li>
                  <a
                  aria-label="San Pedro Presbyterian Church LinkedIn Page"
                    href="https://www.linkedin.com/company/san-pedro-presbyterian-church/"
                    target="_blank"
                  >
                    <IoLogoLinkedin />
                  </a>
                </li>
                <li>
                  <a
                  aria-label="San Pedro Presbyterian Church YouTube Channel"
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
