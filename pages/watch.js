import Markdown from "react-markdown/with-html";
import Verse from "../components/sections/Verse/Verse";
import { fetchAPI, siteAddress } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import { DefaultSeo } from "next-seo";

import classes from "../styles/watch.module.css";

export async function getStaticProps() {
  const watch = await fetchAPI("/watch");
  return {
    props: {
      watch,
    },
    revalidate: 1,
  };
}

const Watch = ({ watch, global }) => (
  <>
    <DefaultSeo
      // titleTemplate={`%s | ${global.metaTitleSuffix}`}
      title={`${watch.metadata.metaTitle} | ${global.metaTitleSuffix}`}
      description={watch.metadata.metaDescription}
      openGraph={{
        images: Object.values(watch.metadata.shareImage.formats).map(
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
        cardType: watch.metadata.twitterCardType,
        handle: watch.metadata.twitterUsername,
      }}
      canonical={`${siteAddress}/watch`}
    />
    <section style={{ textAlign: "center" }}>
      <h1 style={{ display: "none" }}>{watch.pageTitle}</h1>
      <h2>{watch.pageTitle}</h2>
      <div className="row">
        {watch.topText !== `<p><br></p>` ? (
          <div className="col span-2-of-2">
            <div style={{ marginBottom: "2.5rem" }}>
              <div dangerouslySetInnerHTML={{ __html: watch.topText }} />
            </div>
          </div>
        ) : null}
      </div>
      <div className="row">
        {watch.watchColumn.map((column, index, array) => (
          <div
            className={`col span-1-of-${array.length} ${classes.watchColumn}`}
            key={column.id}
          >
            <h3>{column.columnTitle}</h3>
            <div className={classes.videoWrapper}>
              <div dangerouslySetInnerHTML={{ __html: column.columnBody }} />
            </div>
          </div>
        ))}
      </div>
    </section>
    <Verse data={watch.verse} />
  </>
);

export default Watch;
