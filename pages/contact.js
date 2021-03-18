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
    console.log("res: ", result);
    // const message = {
    //   name: event.target.name.value,
    //   email: event.target.email.value,
    //   message: event.target.message.value
    // }
    // console.log("HI THERE", message);
  };

  return (
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
                  rows="10"
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
  );
};

export default Contact;
