import { getSortedNewsData } from "../../lib/api";
import Layout from "../../hoc/Layout/Layout"
import Link from "next/link";

export async function getStaticProps() {
  const allNewsData = await getSortedNewsData();

  return {
    props: {
      allNewsData,
    },
  };
}

const News = ({ allNewsData, global }) => (
  <Layout global={global}>
    <h2>Here are the news pages:</h2>
    <div>
      {allNewsData.map((article) => (
        <div key={article.id}>
          {" "}
          <Link href={`/news/${article.slug}`}>
            <a>{article.title}</a>
          </Link>
        </div>
      ))}
    </div>
  </Layout>
);

export default News;
