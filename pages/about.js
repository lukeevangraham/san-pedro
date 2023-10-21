import { DefaultSeo } from "next-seo";
import Layout from "../hoc/Layout/Layout";
import Image from "next/image";
import Markdown from "react-markdown/with-html";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import { fetchAPI, siteAddress } from "../lib/api";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import classes from "../styles/about.module.css";
import { getStrapiMedia } from "../lib/media";

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
      <DefaultSeo
        // titleTemplate={`%s | ${global.metaTitleSuffix}`}
        title={`${about.metadata.metaTitle} | ${global.metaTitleSuffix}`}
        description={about.metadata.metaDescription}
        openGraph={{
          images: Object.values(about.metadata.shareImage.formats).map(
            (image) => {
              return {
                url: getStrapiMedia(image.url),
                width: image.width,
                height: image.height,
              };
            }
          ),
        }}
        twitter={{
          cardType: about.metadata.twitterCardType,
          handle: about.metadata.twitterUsername,
        }}
        canonical={`${siteAddress}/about`}
      />
      <section>
        <h1 style={{ display: "none" }}>{about.topText}</h1>
        <h2>{about.topText}</h2>
        <div
          className="row"
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div className="col span-1-of-2" style={{ textAlign: "center" }}>
            {about.topEmbed ? (
              <div dangerouslySetInnerHTML={{ __html: about.topEmbed }}></div>
            ) : (
              <Image
                src={about.topSideImage.url}
                alt={about.topSideImage.alternativeText}
                width={450}
                height={470}
                className={classes.topImage}
                layout="intrinsic"
              />
            )}
          </div>
          <div className={`col span-1-of-2 box ${classes.historyText}`}>
            <div dangerouslySetInnerHTML={{ __html: about.historyText }} />
          </div>
        </div>
      </section>
      <section className={classes.whiteBg}>
        <h2>{about.pastorSectionTitle}</h2>
        <div className="row">
          {about.leaderInfo.map((leader, index, array) => (
            <Zoom key={leader.id}>
              <div
                className={`col span-1-of-${array.length}`}
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

                  <div className={`box ${classes.pastorOverlay}`}>
                    <p>{leader.shortBio}</p>
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
            </Zoom>
          ))}
        </div>
      </section>

      <section>
        <h2>{about.serviceSectionTitle}</h2>
        <div className={`row ${classes.serviceSection}`}>
          <Fade bottom cascade>
            <div className="col span-1-of-3 box">
              <div dangerouslySetInnerHTML={{ __html: about.serviceInfo }} />
            </div>
            <div className={`col span-1-of-3 box ${classes.colWithEmbed}`}>
              <div dangerouslySetInnerHTML={{ __html: about.locationInfo }} />
            </div>
            <div className={`col span-1-of-3 box`}>
              <div dangerouslySetInnerHTML={{ __html: about.thirdColumn }} />
            </div>
          </Fade>
        </div>
      </section>

      <section className={classes.whiteBg}>
        <h2>{about.familySectionTitle}</h2>
        <div className="row">
          <Zoom cascade>
            {about.ministryInfo.map((ministry, index, array) => (
              <div
                className={`col span-1-of-${array.length} box ${classes.ministry}`}
                key={ministry.id}
              >
                <div
                  style={{
                    height: "70px",
                    width: "70px",
                    position: "relative",
                    margin: "0 auto .5rem auto",
                  }}
                >
                  <Image
                    src={getStrapiMedia(ministry.icon.url)}
                    alt={ministry.icon.alternativeText}
                    layout="fill"
                  />
                </div>
                <h3>{ministry.title}</h3>
                <p>{ministry.description}</p>
              </div>
            ))}
          </Zoom>
        </div>
      </section>
    </>
  );
};

export default About;
