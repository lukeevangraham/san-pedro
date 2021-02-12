import { getStrapiMedia } from "../../../lib/media";
import Link from "next/link";

const NewsCard = ({ article }) => {
  const truncate = (str, n, useWordBoundary) => {
    if (str.length <= n) {
      return str;
    }
    const subString = str.substr(0, n - 1); // the original check
    return (
      (useWordBoundary
        ? subString.substr(0, subString.lastIndexOf(" "))
        : subString)
    );
  };

  return (
    <>
      {console.log("article: ", article)}
      <Link href={`/news/${article.slug}`}>
        <a>
          <img
            className="responsiveImage"
            src={getStrapiMedia(article.image.formats.medium.url)}
            alt={article.image.alternativeText}
          />
        </a>
      </Link>
      <Link href={`/news/${article.slug}`}>
        <a>{article.title}</a>
      </Link>
      <div>{article.ministries[0].ministryName}</div>
      <div>
        {new Date(article.created_at).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </div>
      <div>{truncate(article.body, 50, true)}&hellip;</div>
    </>
  );
};

export default NewsCard;
