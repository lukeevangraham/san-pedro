import { getSortedNewsData, fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Layout from "../../hoc/Layout/Layout";
import Link from "next/link";

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
          {console.log("article: ", article)}{" "}
          <img className="responsiveImage"
            src={getStrapiMedia(article.image.formats.medium.url)}
            alt={article.image.alternativeText}
          />
          <Link href={`/news/${article.slug}`}>
            <a>{article.title}</a>
          </Link>
        </div>
      ))}
    </div>
  </>
);

export default News;
