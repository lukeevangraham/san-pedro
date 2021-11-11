import { fetchAPI } from "../lib/api";
import { DefaultSeo } from "next-seo";
import { getStrapiMedia } from "../lib/media";
import Image from "next/image";
import Button from "../components/UI/Button/Button";
import Markdown from "react-markdown";
import Sections from "../components/sections/sections";
import Verse from "../components/sections/Verse/Verse";
import Fade from "react-reveal/Fade"

import classes from "../styles/giving.module.scss";

export async function getStaticProps() {
  const giving = await fetchAPI("/giving");
  return {
    props: {
      giving,
    },
    revalidate: 1,
  };
}

const Giving = ({ global, giving }) => {
  // Making sure we don't render the hero (first section)
  let renderSections = giving.bottomVerse ? (
    <Sections sections={[giving.bottomVerse]} preview={null} />
  ) : (
    <div>Loading...</div>
  );

  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${global.metaTitleSuffix}`}
        title={giving.metadata.metaTitle}
        description={giving.metadata.metaDescription}
        openGraph={{
          images: Object.values(giving.metadata.shareImage.formats).map(
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
          cardType: giving.metadata.twitterCardType,
          handle: giving.metadata.twitterUsername,
        }}
      />
      <section style={{ background: "#fff" }}>
        <h2>{giving.givingPageTitle}</h2>
        <div className="row">
          {console.log("giving: ", giving)}
          <div className={classes.topText}>
            <div dangerouslySetInnerHTML={{ __html: giving.topText }} />
            <div className={classes.topButtons}>
              {giving.topButton.map((button) => (
                <Button button={button} key={button.id} />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col span-2-of-2">You can also:</div>
        </div> */}
      </section>
      <section>
        <div className="row">
          <div className={`${classes.offeringOptions}`}>
            <Fade>
              {giving.moreWaysToGive.map((givingMethod, index, array) => (
                <div
                  className={``}
                  key={givingMethod.id}
                >
                  <Image
                    src={givingMethod.icon.url}
                    alt={givingMethod.icon.alternativeText}
                    width={55}
                    height={55}
                    className={classes.icon}
                  />
                  <div className={classes.methodTitle}>{givingMethod.title}</div>
                  <div
                    dangerouslySetInnerHTML={{ __html: givingMethod.description }}
                    className={classes.methodDescription}
                  />
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </section>
      <Verse data={giving.bottomVerse} />
    </>
  );
};

export default Giving;
