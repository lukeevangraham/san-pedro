import { getSortedMinistriesData, fetchAPI } from "../../lib/api";
import Link from "next/link";
import Image from "next/image";
import Verse from "../../components/sections/Verse/Verse";
import { getStrapiMedia } from "../../lib/media";
import classNames from "classnames";

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

const Ministries = ({ allMinistriesData, ministriesPage }) => {
  return (
    <>
      <section>
        <h2>Ministries</h2>
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col span-1-of-8" />
          <div
            className={`col span-4-of-8 box ${classes.description}`}
          >
            <div dangerouslySetInnerHTML={{ __html: ministriesPage.topText }} />
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
        <div className={`row ${classes.ministriesContainer}`}>
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
        </div>
      </section>
      <Verse data={ministriesPage.verse} />
    </>
  );
};

export default Ministries;
