import Markdown from "react-markdown";
import Layout from "../../hoc/Layout/Layout";
import Image from "next/image"
import { getStrapiMedia } from "../../lib/media";
import { getAllNewsSlugs, getNewsData, fetchAPI } from "../../lib/api";
import { IoPerson } from "react-icons/io5"
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
    <section className={["row", classes.article].join(" ")}>
      <div className={classes.topInfo}>
        <div className={classes.dateBox}>
          <div className={classes.day}>
            {new Date(props.newsData.published_at).toLocaleDateString("en-US", {
              day: "numeric",
            })}
          </div>
          <div className={classes.month}>
            {new Date(props.newsData.published_at).toLocaleDateString("en-US", {
              month: "short",
            })}
          </div>
        </div>
        <div className={classes.authorAndTitle}>
          <div className={classes.title}>{props.newsData.title}</div>
          <div className={classes.author}><IoPerson /> {props.newsData.author}</div>
        </div>
      </div>
      <img
        className={["responsiveImage", classes.image].join(" ")}
        src={getStrapiMedia(props.newsData.image.url)}
      />
      <div className={classes.belowPhoto}>
        <div className={classes.body}>
          <Markdown source={props.newsData.body} />
        </div>
      </div>
      {console.log("props: ", props)}
    </section>
  );
}
