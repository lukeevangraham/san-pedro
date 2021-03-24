import { getStrapiMedia } from "../../../lib/media";
import Image from "next/image";
import Link from "next/link";
import { IoCalendarOutline, IoPeopleCircleOutline } from "react-icons/io5";
import Fade from "react-reveal/Fade";

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

  let dateShown;

  article.dateline ? (dateShown = article.dateline.replace(/-/g, "/")) : null;

  return (
    <div className={classes.newsCard}>
      <Fade>
        <Link href={`/news/${article.slug}`}>
          <a>
            <div className={classes.ratioWrapper}>
              <Image
                src={getStrapiMedia(article.image.url)}
                alt={article.image.alternativeText}
                layout="fill"
                sizes="(max-width: 480px) 100vw, 33vw"
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

          <div className={classes.excerpt}>
            {/* {truncate(article.body, 100, true)}&hellip; */}
            <div
              dangerouslySetInnerHTML={{ __html: article.body }}
              style={{ height: "2.5rem" }}
            />
          </div>
          <div className={classes.moreInfo}>
            {article.author ? (
              article.author.length ? (
                <div className={classes.moreInfoDetail}>
                  <>
                    <IoPeopleCircleOutline />
                    <div className={classes.moreInfoDetail}>
                      {article.author}
                    </div>
                  </>
                </div>
              ) : null
            ) : null}

            <div className={classes.moreInfoDetail}>
              <IoCalendarOutline />
              {new Date(dateShown).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
              {/* timeZone: "Portugal", */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default NewsCard;
