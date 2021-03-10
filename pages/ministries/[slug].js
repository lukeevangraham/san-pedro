import Markdown from "react-markdown/with-html";
import Seo from "../../components/elements/seo";
import Image from "next/image";
import NewsCard from "../../components/News/NewsCard/NewsCard";
import EventCard from "../../components/Events/EventCard/EventCard";
import { keepEventsCurrent, compareAndSortDates } from "../../lib/events";
import { compareAndSortArticlesByDate } from "../../lib/news";
import { getStrapiMedia } from "../../lib/media";
import { getAllMinistriesSlugs, getMinistryData } from "../../lib/api";

import classes from "./slug.module.css";

export async function getStaticPaths() {
  const paths = await getAllMinistriesSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const ministryData = await getMinistryData(params.slug);
  return {
    props: {
      ministryData,
    },
    revalidate: 1,
  };
}

export default function Ministry({ ministryData }) {
  // GETTING RID OF EVENTS THAT HAPPENED AND DON'T REPEAT
  const oldEventsRemoved = ministryData.events.filter(
    (event) => event.endDate >= new Date().toISOString()
  );

  // BRINGING REPEATING EVENTS UP TO CURRENT ITERATION
  const recurringEventsMadeCurrent = keepEventsCurrent(oldEventsRemoved);

  // SORTING THE DATES LEFT
  const sortedDates = recurringEventsMadeCurrent.sort(compareAndSortDates);

  // SORTING THE NEWS ITEMS
  const sortedArticles = ministryData.news.sort(compareAndSortArticlesByDate);

  return (
    <>
      <Seo metadata={ministryData.metadata} />
      <section>
        <h2 className={classes.topInfo}>
          {ministryData.ministryName} Ministry
        </h2>
        <div className="row"></div>
        <div className="row">
          <div className="col span-1-of-8"></div>
          <div className={`col span-4-of-8 box ${classes.description}`}>
            <Markdown source={ministryData.description} />
          </div>
          <div className={`col span-2-of-8 box`}>
            {ministryData.leaderPhoto ? (
              <Image
                src={getStrapiMedia(ministryData.leaderPhoto.url)}
                width={272}
                height={310}
                layout="responsive"
                className={classes.leaderPhoto}
              />
            ) : null}
          </div>
        </div>
      </section>
      {sortedArticles.length ? (
        <section
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, #f5f5f5, #f3f3f3)",
          }}
        >
          <div className="row">
            <div className={`col span-2-of-2 ${classes.topInfo}`}>
              <h2>Latest {ministryData.ministryName} Ministry News</h2>
            </div>
            <div className="row">
              <div className="col span-2-of-2">
                <div className={classes.grid}>
                  {sortedArticles.map((article, index) =>
                    index < 6 ? (
                      <NewsCard article={article} key={article.id} />
                    ) : null
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      {sortedDates.length ? (
        <section>
          <div className="row">
            <div className={`col span-2-of-2 ${classes.topInfo}`}>
              <h2>Upcoming {ministryData.ministryName} Ministry Events</h2>
            </div>
            <div className="row">
              <div className="col span-2-of-2">
                <div className={classes.grid}>
                  {sortedDates.map((event, index) =>
                    index < 6 ? (
                      <EventCard event={event} key={event.id} />
                    ) : null
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
