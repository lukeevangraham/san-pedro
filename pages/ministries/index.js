import { getSortedMinistriesData, fetchAPI } from "../../lib/api";
import { DefaultSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import Verse from "../../components/sections/Verse/Verse";
import { getStrapiMedia } from "../../lib/media";
import classNames from "classnames";
import Fade from "react-reveal/Fade"

import classes from "./index.module.css";

export async function getStaticProps() {
  const allMinistriesData = await getSortedMinistriesData();
  const ministriesPage = await fetchAPI("/ministries-page");

  return {
    props: {
      allMinistriesData,
      ministriesPage,
    },
    revalidate: 1,
  };
}

const Ministries = ({ allMinistriesData, ministriesPage, global }) => {
  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${global.metaTitleSuffix}`}
        title={"Ministries"}
        description={
          "San Pedro Presbyterian Church in San Antonio, Texas, plans opportunities for spiritual growth through ministries"
        }
        openGraph={{
          images: Object.values(global.metadata.shareImage.formats).map(
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
          cardType: global.metadata.twitterCardType,
          handle: global.metadata.twitterUsername,
        }}
      />
      <section>
        <h2>Ministries</h2>
        <div className="row">
          <div className={classes.topInfo}>
            <div className="col span-1-of-8" />
            <div className={`col span-4-of-8 box ${classes.description}`}>
              <div
                dangerouslySetInnerHTML={{ __html: ministriesPage.topText }}
              />
            </div>
            <div className={`col span-2-of-8 box`}>
              {ministriesPage.topImage ? (
                <Image
                  src={getStrapiMedia(ministriesPage.topImage.url)}
                  width={272}
                  height={310}
                  layout="responsive"
                  className={classes.leaderPhoto}
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className={`row ${classes.ministriesContainer}`}>
          <Fade>
          {allMinistriesData.map((ministry) => (
            <div key={ministry.id}>
              <Link href={`ministries/${ministry.slug}`}>
                <a className={classes.ministry}>
                  <Image
                    src={ministry.icon.url}
                    width={80}
                    height={80}
                    className={classes.ministryIcon}
                  />
                  <div className={classes.ministryName}>
                    {ministry.ministryName}
                  </div>
                </a>
              </Link>
            </div>
          ))}
          </Fade>
        </div>
      </section>
      <Verse data={ministriesPage.verse} />
    </>
  );
};

export default Ministries;
