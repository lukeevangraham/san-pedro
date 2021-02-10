import Layout from "../../hoc/Layout/Layout";
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
  const global = await fetchAPI("/global");
  return {
    props: {
      newsData,
      global
    },
  };
}

export default function News(props) {
  return (
    <Layout global={props.global}>
      <div>{props.newsData.title}</div>
      {console.log("props: ", props)}
    </Layout>
  );
}
