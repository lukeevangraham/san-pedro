import classNames from "classnames";
// import Image from "../../elements/image";
import Image from "next/image";
import Video from "../../elements/video";
import CustomLink from "../../elements/custom-link";
import Fade from "react-reveal/Fade";

import classes from "./FeatureRowsGroup.module.css";

const FeatureRowsGroup = ({ data }) => {
  return (
    <section>
      {data.title ? <h2>{data.title}</h2> : null}
      {data.topText ? (
        <div className="row">
          <div className="col span-1-of-6"></div>
          <div
            className="col span-4-of-6"
            style={{
              margin: "auto",
              textAlign: "center",
              marginBottom: "1.75rem",
              fontWeight: "200",
            }}
          >
            <p>{data.topText}</p>
          </div>
        </div>
      ) : null}
      {/* <div className="container flex flex-col gap-12 py-12"> */}
      <div className={`row ${classes.groupWrap}`}>
        <Fade bottom cascade>
          {data.features.map((feature, index) => (
            <div
              className={classNames(
                // Common classes
                classes.feature,
                {
                  "lg:flex-row": index % 2 === 0,
                  [classes.reverseRow]: index % 2 === 1,
                }
              )}
              key={feature.id}
            >
              {/* Text section */}
              {/* <div className="w-full lg:w-6/12 lg:pr-6 text-lg"> */}
              <div className={classes.featureCol}>
                <h3 className={classes.title}>{feature.title}</h3>
                <p className={classes.description}>{feature.description}</p>
                <CustomLink link={feature.link}>
                  <div className="text-blue-600 with-arrow hover:underline">
                    {feature.link.text}
                  </div>
                </CustomLink>
              </div>
              {/* Media section */}
              {/* <div className="w-full sm:9/12 lg:w-4/12 max-h-full"> */}
              <div className={`${classes.featureCol} ${classes.media}`}>
                {/* Images */}
                {feature.media.mime.startsWith("image") && (
                  <div className={classes.imageWrap}>
                    <Image
                      src={feature.media.url}
                      alt={feature.media.alternativeText}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                )}
                {/* Videos */}
                {feature.media.mime.startsWith("video") && (
                  <Video
                    media={feature.media}
                    className="w-full h-auto"
                    autoPlay
                    controls={false}
                  />
                )}
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  );
};

export default FeatureRowsGroup;
