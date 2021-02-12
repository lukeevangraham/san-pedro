import { getStrapiMedia } from "../../../lib/media";
import Link from "next/link";

import classes from "./NewsCard.module.css";

const NewsCard = ({ article }) => {
  const truncate = (str, n, useWordBoundary) => {
    if (str.length <= n) {
      return str;
    }
    const subString = str.substr(0, n - 1); // the original check
    return useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(" "))
      : subString;
  };

  return (
    <div className={classes.newsCard}>
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
      <div className={classes.belowPicture}>
        <Link href={`/news/${article.slug}`}>
          <a className={classes.title}>{article.title}</a>
        </Link>

        <p className={classes.excerpt}>
          {truncate(article.body, 100, true)}&hellip;
        </p>
        <div className={classes.moreInfo}>
          {article.ministries.length ? (
            <div className={classes.moreInfoDetail}>
              {article.ministries[0].ministryName}
            </div>
          ) : null}

          <div className={classes.moreInfoDetail}>
            {new Date(article.created_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
