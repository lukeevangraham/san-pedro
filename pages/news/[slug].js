// import Head from "next/head";
import Seo from "../../components/elements/seo";
import Markdown from "react-markdown";
import Layout from "../../hoc/Layout/Layout";
import Button from "../../components/UI/Button/Button";
import Image from "next/image";
import { getStrapiMedia } from "../../lib/media";
import { getAllNewsSlugs, getNewsData, fetchAPI } from "../../lib/api";
import { IoPerson, IoLogoFacebook } from "react-icons/io5";
import Head from "next/head";

import classes from "./slug.module.css";

export async function getStaticPaths() {
  const paths = await getAllNewsSlugs();
  console.log("paths: ", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const newsData = await getNewsData(params.slug);
  // const global = await fetchAPI("/global");
  return {
    props: {
      newsData,
      // global
    },
    revalidate: 1,
  };
}

export default function News(props) {
  return (
    <>
      <Seo metadata={props.newsData.metadata} />
      {/* <section style={{ backgroundColor: "rgb(252, 252, 252)" }}> */}
      <section style={{ padding: 0 }}>
        <div className={["row", classes.article].join(" ")}>
          <div className={classes.topInfo}>
            <div className={classes.dateBox}>
              <div className={classes.day}>
                {new Date(props.newsData.published_at).toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                  }
                )}
              </div>
              <div className={classes.month}>
                {new Date(props.newsData.published_at).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                  }
                )}
              </div>
            </div>
            <div className={classes.authorAndTitle}>
              <div className={classes.title}>{props.newsData.title}</div>
              <div className={classes.author}>
                <IoPerson /> {props.newsData.author}
              </div>
            </div>
          </div>
          <div className={classes.imageWrap}>
            <Image
              src={getStrapiMedia(props.newsData.image.url)}
              layout="fill"
              objectFit="cover"
              alt={props.newsData.image.alternativeText}
            />
          </div>
          {/* <img
        className={["responsiveImage", classes.image].join(" ")}
        src={getStrapiMedia(props.newsData.image.url)}
      /> */}
          <div className={classes.belowPhoto}>
            <div className={classes.body}>
              <Markdown source={props.newsData.body} />
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
