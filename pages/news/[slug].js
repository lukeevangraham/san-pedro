// import Head from "next/head";
import "@fontsource/source-sans-pro/200.css";
import "@fontsource/cardo";
import Seo from "../../components/elements/seo";
import Markdown from "react-markdown/with-html";
// import Layout from "../../hoc/Layout/Layout";
import Button from "../../components/UI/Button/Button";
import Image from "next/image";
import { getStrapiMedia } from "../../lib/media";
import {
  getAllNewsSlugs,
  getNewsData,
  fetchAPI,
  siteAddress,
} from "../../lib/api";
import { IoPerson, IoLogoFacebook } from "react-icons/io5";
import Head from "next/head";
import Pulse from "react-reveal/Pulse";
import { useRouter } from "next/router";

import classes from "./slug.module.css";

export async function getStaticPaths() {
  const paths = await getAllNewsSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // const newsData = await getNewsData(params.slug);
  // const global = await fetchAPI("/global");

  const [newsData, global] = await Promise.all([
    getNewsData(params.slug),
    fetchAPI("/global"),
  ]);
  return {
    props: {
      newsData,
      global,
    },
    revalidate: 1,
  };
}

export default function News(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Seo
        metadata={props.newsData.metadata}
        global={props.global}
        referer={props.newsData.title}
        description={props.newsData.title}
        canonical={`${siteAddress}/news/${props.newsData.slug}`}
      />
      <h1 style={{ display: "none" }}>{props.newsData.title}</h1>
      {/* <section style={{ backgroundColor: "rgb(252, 252, 252)" }}> */}
      <section style={{ padding: 0 }}>
        <div className={["row", classes.article].join(" ")}>
          <div className={classes.topInfo}>
            <Pulse>
              <div className={classes.dateBox}>
                <div className={classes.day}>
                  {parseInt(
                    new Date(props.newsData.dateline).toLocaleDateString(
                      "en-US",
                      {
                        day: "numeric",
                      }
                    )
                  ) + 1}
                </div>
                <div className={classes.month}>
                  {new Date(props.newsData.dateline).toLocaleDateString(
                    "en-US",
                    {
                      month: "short",
                    }
                  )}
                </div>
              </div>
            </Pulse>
            <div className={classes.authorAndTitle}>
              <div className={classes.title}>{props.newsData.title}</div>

              {props.newsData.author ? (
                <div className={classes.author}>
                  <IoPerson />

                  {props.newsData.author}
                </div>
              ) : null}
            </div>
          </div>
          <div className={classes.imageWrap}>
            <Image
              src={getStrapiMedia(props.newsData.image.url)}
              layout="fill"
              objectFit="cover"
              alt={props.newsData.image.alternativeText}
              priority={true}
            />
          </div>
          {/* <img
        className={["responsiveImage", classes.image].join(" ")}
        src={getStrapiMedia(props.newsData.image.url)}
      /> */}
          <div className={classes.belowPhoto}>
            <div className={classes.body}>
              {/* <Markdown source={props.newsData.body} allowDangerousHtml /> */}
              <div
                dangerouslySetInnerHTML={{ __html: props.newsData.body }}
              ></div>
            </div>
          </div>
          <div className={classes.btnContainer}>
            <Button
              button={{
                url: `https://www.facebook.com/sharer/sharer.php?u=sanpedropc.org/news/${props.newsData.slug}`,
                newTab: true,
                text: "Share",
                type: "primary",
              }}
              compact={true}
              logo={"Facebook"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
