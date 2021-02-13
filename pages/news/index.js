import { getSortedNewsData, fetchAPI } from "../../lib/api";

// import faker from "faker";
import NewsCard from "../../components/News/NewsCard/NewsCard";
import Layout from "../../hoc/Layout/Layout";
import { IoFileTrayStackedSharp } from "react-icons/io5";

import classes from "./index.module.css"

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
    <section>
      <h1>Here are the news pages:</h1>
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
  );
};

export default News;
