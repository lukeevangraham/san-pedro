import { getStrapiMedia } from "../../../lib/media";
import Image from "next/image";
import Link from "next/link";
import { IoCalendarOutline, IoPeopleCircleOutline } from "react-icons/io5";

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
      <Link href={`/news/${article.slug}`}>
        <a>
          <div className={classes.ratioWrapper}>
            <Image
              src={getStrapiMedia(article.image.url)}
              alt={article.image.alternativeText}
              layout="fill"
              sizes="33vw"
            />
            {/* <img
              className="responsiveImage"
              src={getStrapiMedia(article.image.formats.medium.url)}
              // src={article.image.formats.medium.url}
              alt={article.image.alternativeText}
            /> */}
          </div>
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
          {article.ministries ? (
            article.ministries.length ? (
              <div className={classes.moreInfoDetail}>
                <>
                  <IoPeopleCircleOutline />
                  <div className={classes.moreInfoDetail}>
                    {article.ministries[0].ministryName}
                  </div>
                </>
              </div>
            ) : null
          ) : null}

          <div className={classes.moreInfoDetail}>
            <IoCalendarOutline />
            {new Date(article.published_at).toLocaleDateString("en-US", {
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
