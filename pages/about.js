import Layout from "../hoc/Layout/Layout";
import Image from "next/image";
import Markdown from "react-markdown/with-html";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import { fetchAPI } from "../lib/api";

import classes from "../styles/about.module.css";

export async function getStaticProps() {
  const about = await fetchAPI("/about");
  return {
    props: {
      about,
    },
    revalidate: 1,
  };
}

const About = ({ global, about }) => {
  return (
    <>
      <section>
        <h2>{about.topText}</h2>
        <div
          className="row"
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div className="col span-1-of-2" style={{ textAlign: "center" }}>
            <Image
              src={about.topSideImage.url}
              width={450}
              height={470}
              className={classes.topImage}
            />
          </div>
          <div className={`col span-1-of-2 ${classes.historyText}`}>
            <Markdown source={about.historyText} />
          </div>
        </div>
      </section>
      <section className={classes.whiteBg}>
        <h2>{about.pastorSectionTitle}</h2>
        <div className="row">
          {about.leaderInfo.map((leader, index, array) => (
            <div
              className={`col span-1-of-${array.length}`}
              key={leader.id}
              style={{ textAlign: "center", padding: "1rem" }}
            >
              <div className={classes.imageWrapper}>
                <Image
                  src={leader.image.url}
                  alt={leader.image.alternativeText}
                  width={521}
                  height={521}
                  layout="responsive"
                />

                <div className={classes.pastorOverlay}>
                  <div>{leader.shortBio}</div>
                  <br />
                  {leader.phoneNumber ? (
                    <div className={classes.contact}>
                      <IoCallOutline />
                      {`: ${leader.phoneNumber}`}
                    </div>
                  ) : null}
                  {leader.email ? (
                    <div className={classes.contact}>
                      <IoMailOutline />
                      {`: ${leader.email}`}
                    </div>
                  ) : null}
                </div>
              </div>
              <h3
                style={{
                  marginBottom: ".25rem",
                  marginTop: "1rem",
                  fontWeight: "600",
                }}
              >{`${leader.title ? leader.title : ""} ${leader.firstName} ${
                leader.lastName
              }`}</h3>
              <div>{leader.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>{about.serviceSectionTitle}</h2>
        <div className="row">
          <div className="col span-1-of-2">
            <Markdown source={about.serviceInfo} />
          </div>
          <div className="col span-1-of-2">
            <Markdown source={about.locationInfo} allowDangerousHtml />
          </div>
        </div>
      </section>

      <section className={classes.whiteBg}>
        <h2>{about.familySectionTitle}</h2>
        <div className="row">
          {about.ministryInfo.map((ministry, index, array) => (
            <div
              className={`col span-1-of-${array.length} ${classes.ministry}`}
              key={ministry.id}
            >
              <h3>{ministry.title}</h3>
              <div>{ministry.description}</div>
            </div>
          ))}
        </div>
      </section>
      {console.log(about)}
    </>
  );
};

export default About;
