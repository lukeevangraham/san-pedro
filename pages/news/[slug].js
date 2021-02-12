import Markdown from "react-markdown";
import Layout from "../../hoc/Layout/Layout";
import { getStrapiMedia } from "../../lib/media";
import { getAllNewsSlugs, getNewsData, fetchAPI } from "../../lib/api";
import Head from "next/head";

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
    <div className="row" style={{ textAlign: "center" }}>
      <h1>{props.newsData.title}</h1>
      <img className="responsiveImage" src={getStrapiMedia(props.newsData.image.url)} />
      <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#fff", marginTop: 0 }}>
        <div style={{ maxWidth: "600px", lineHeight: "1.5", textAlign: "left", margin: "2rem 0" }}>
          <Markdown source={props.newsData.body} />
        </div>
      </div>
      {console.log("props: ", props)}
    </div>
  );
}
