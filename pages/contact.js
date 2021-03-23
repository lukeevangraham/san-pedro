import { IoLocation, IoCall, IoMail, IoGlobe } from "react-icons/io5";
import Button from "../components/UI/Button/Button";

import classes from "../styles/contact.module.css";

const Contact = (props) => {
  const sendMessage = async (event) => {
    event.preventDefault();

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
    // const message = {
    //   name: event.target.name.value,
    //   email: event.target.email.value,
    //   message: event.target.message.value
    // }
    // console.log("HI THERE", message);
  };

  return (
    <>
      <section>
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
            <h3 style={{ textAlign: "center" }}>
              We're happy to hear from you
            </h3>
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
                  {/* <div type="submit">
                  <Button
                    button={{
                      url: `#`,
                      // newTab: true,
                      text: "Send",
                      type: "primary",
                    }}
                    // compact={true}
                    // logo={"Facebook"}
                  />
                </div> */}
                </div>
              </div>
            </form>
          </div>
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
    </>
  );
};

export default Contact;
