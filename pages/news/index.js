import { getSortedNewsData, fetchAPI } from "../../lib/api";

import NewsCard from "../../components/News/NewsCard/NewsCard";
import Layout from "../../hoc/Layout/Layout";


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

const News = ({ allNewsData, global }) => (
  <>
    <h1>Here are the news pages:</h1>
    {/* <h2>Here are the news pages:</h2> */}
    <div className="row">
      {allNewsData.map((article) => (
        <div key={article.id} className="col col3 span-1-of-3">
          <NewsCard article={article} />
        </div>
      ))}
    </div>
  </>
);

export default News;
