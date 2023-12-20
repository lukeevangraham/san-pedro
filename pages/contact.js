import { useState } from "react";
import { IoLocation, IoCall, IoMail, IoGlobe } from "react-icons/io5";
import Button from "../components/UI/Button/Button";
import Layout from "../hoc/Layout/Layout";
import { fetchAPI, siteAddress } from "../lib/api";
import { DefaultSeo } from "next-seo";
import { getStrapiMedia } from "../lib/media";

import classes from "../styles/contact.module.scss";

export async function getStaticProps() {
  const contact = await fetchAPI("/contact");
  const global = await fetchAPI("/global");
  return {
    props: {
      contact,
      global,
    },
    revalidate: 1,
  };
}

const Contact = ({ contact, global }) => {
  let [messageStatus, setMessageStatus] = useState();

  const sendMessage = async (event) => {
    event.preventDefault();

    setMessageStatus(1);

    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    console.log("RES: ", result);
    result.status == 200 ? setMessageStatus(200) : null;
    // const message = {
    //   name: event.target.name.value,
    //   email: event.target.email.value,
    //   message: event.target.message.value
    // }
    // console.log("HI THERE", message);
  };

  let messageForm = "";

  switch (messageStatus) {
    case 0:
      break;
    case 200:
      messageForm = (
        <div className={classes.successParent}>
          {console.log("redefining message form")}
          <h3>Your message was successfully delivered</h3>
        </div>
      );
      break;
    case 1:
      messageForm = <div className={classes.successParent}>Sending...</div>;
      break;

    default:
      messageForm = (
        <>
          <h3 style={{ textAlign: "center" }}>We're happy to hear from you</h3>
          <form onSubmit={sendMessage} className={classes.contactForm}>
            <div className="row">
              <div className="col span-1-of-2">
                <input type="text" name="name" placeholder="Your name" />
              </div>
              <div className="col span-1-of-2">
                <input type="email" name="email" placeholder="Your email" />
              </div>
            </div>
            <div className="row">
              <div className="col span-2-of-2">
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col span-2-of-2">
                <button type="submit">Send</button>
              </div>
            </div>
          </form>
        </>
      );
      break;
  }

  return (
    <>
      <Layout global={global}>
        <DefaultSeo
          // titleTemplate={`%s | ${global.metaTitleSuffix}`}
          title={`${contact.metadata.metaTitle} | ${global.metaTitleSuffix}`}
          description={contact.metadata.metaDescription}
          openGraph={{
            images: Object.values(contact.metadata.shareImage.formats).map(
              (image) => {
                return {
                  url: getStrapiMedia(image.url),
                  width: image.width,
                  height: image.height,
                };
              }
            ),
            type: "website",
          }}
          twitter={{
            cardType: contact.metadata.twitterCardType,
            handle: contact.metadata.twitterUsername,
          }}
          canonical={`${siteAddress}/contact`}
        />
        <section>
          <h1 style={{ display: "none" }}>Contact</h1>
          <h2>Contact</h2>
          <div className={`row ${classes.contactPage}`}>
            <div className={`col span-1-of-2 ${classes.addressInfo}`}>
              <ul>
                <li>
                  <div className={classes.iconBg}>
                    <IoLocation />
                  </div>
                  <div>14900 San Pedro Ave, San Antonio, TX 78232</div>
                </li>
                <li>
                  <div className={classes.iconBg}>
                    <IoCall />
                  </div>
                  <div>(210)494-6560</div>
                </li>
                <li>
                  <div className={classes.iconBg}>
                    <IoMail />
                  </div>
                  <div>office@sanpedropc.org</div>
                </li>
                <li>
                  <div className={classes.iconBg}>
                    <IoGlobe />{" "}
                  </div>
                  <div>www.sanpedropc.org</div>
                </li>
              </ul>
            </div>
            <div className="col span-1-of-2">{messageForm}</div>
          </div>
        </section>
        <section className={classes.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.9075441037994!2d-98.47911278446566!3d29.57729328205462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c8a708f3a58cf%3A0x62003f4e3fb955a0!2sSan%20Pedro%20Presbyterian%20Church!5e0!3m2!1sen!2sus!4v1616105690710!5m2!1sen!2sus"
            width="100%"
            height="500"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            loading="lazy"
          ></iframe>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
