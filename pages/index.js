import Head from "next/head";
import { DefaultSeo } from "next-seo";
import Layout from "../hoc/Layout/Layout";
import HomePage from "../components/HomePage/HomePage";
import Sections from "../components/sections/sections";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { render } from "react-dom";

// import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const homeData = await fetchAPI("/home");
  const global = await fetchAPI("/global");
  return {
    props: {
      homeData,
      global
    },
    revalidate: 1,
  };
}

export default function Home(props) {
  const { metadata } = props.global;

  let renderSections = props.homeData.contentSections ? (
    <Sections sections={props.homeData.contentSections} preview={null} />
  ) : (
    <div>Loading...</div>
  );

  return (
    <div>
      <Head>
        <link rel="icon" href={getStrapiMedia(props.global.favicon.url)} />
      </Head>
      <DefaultSeo
        titleTemplate={`%s | ${props.global.metaTitleSuffix}`}
        title={"Page"}
        discription={metadata.metaDescription}
        openGraph={{
          images: Object.values(metadata.shareImage.formats).map((image) => {
            return {
              url: getStrapiMedia(image.url),
              width: image.width,
              height: image.height,
            };
          }),
        }}
        twitter={{
          cardType: metadata.twitterCardType,
          handle: metadata.twitterUsername,
        }}
      />

      <Layout
        home
        global={props.global}
        heroBg={props.homeData.contentSections[0].picture.url}
        heroData={props.homeData.contentSections[0]}
      >
        <HomePage />
        {renderSections}
      </Layout>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
