import { getSortedNewsData, fetchAPI } from "../../lib/api";
import { DefaultSeo } from "next-seo";
import { getStrapiMedia } from "../../lib/media";
import Fade from "react-reveal/Fade";

// import faker from "faker";
import NewsCard from "../../components/News/NewsCard/NewsCard";

import classes from "./index.module.css";

export async function getStaticProps() {
  const allNewsData = await getSortedNewsData();
  // const global = await fetchAPI("/global");

  return {
    props: {
      allNewsData,
      // global
    },
    revalidate: 1,
  };
}

const News = ({ allNewsData, global }) => {
  // const createArticle = () => {
  //   return {
  //     id: faker.random.number(),
  //     title: faker.lorem.words(),
  //     slug: faker.lorem.slug(),
  //     shortName: faker.lorem.words(),
  //     author: faker.name.findName(),
  //     body: faker.lorem.text(),
  //     published_at: faker.date.past(),
  //     created_at: faker.date.past(),
  //     updated_at: faker.date.past(),
  //     image: {
  //       formats: {
  //         medium: {
  //           url: faker.random.image(),
  //         },
  //       },
  //     },
  //     ministries: []
  //   };
  // };

  // const createArticles = (numArticles = 6) => {
  //   return new Array(numArticles).fill(undefined).map(createArticle);
  // };

  // const fakeArticles = createArticles(6);

  // console.log("article: ", fakeArticles);
  return (
    <>
      <DefaultSeo
        // titleTemplate={`%s | ${global.metaTitleSuffix}`}
        title={`News | ${global.metaTitleSuffix}`}
        description={
          "Keep up with the latest news from San Pedro Presbyterian Church in San Antonio, Texas"
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
        <h2>Current News</h2>
        {/* <h2>Here are the news pages:</h2> */}
        <div className="row">
          <div className={classes.grid}>
            {/* {fakeArticles.map((article) => ( */}
            {allNewsData.map((article) => (
              <NewsCard article={article} key={article.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
