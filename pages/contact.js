import { IoLocation, IoCall, IoMail, IoGlobe } from "react-icons/io5";
import Button from "../components/UI/Button/Button";

import classes from "../styles/contact.module.css";

const Contact = (props) => (
  <section>
    <h2>Contact</h2>
    <div className="row">
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
            <div>sppchurch@sppcsa.com</div>
          </li>
          <li>
            <div className={classes.iconBg}>
              <IoGlobe />{" "}
            </div>
            <div>www.sanpedropc.org</div>
          </li>
        </ul>
      </div>
      <div className="col span-1-of-2">
        <h3>We're happy to hear from you</h3>
        <form action="#" className={classes.contactForm}>
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
                rows="10"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col span-2-of-2">
            <Button
              button={{
                url: `https://www.facebook.com/sharer/sharer.php?u=sanpedropc.org/news/`,
                newTab: true,
                text: "Share",
                type: "primary",
              }}
              compact={true}
              logo={"Facebook"}
            />
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
