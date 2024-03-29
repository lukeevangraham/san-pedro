import Markdown from "react-markdown/with-html";
import Seo from "../../components/elements/seo";
import Image from "next/image";
import Layout from "../../hoc/Layout/Layout";
import NewsCard from "../../components/News/NewsCard/NewsCard";
import EventCard from "../../components/Events/EventCard/EventCard";
import { keepEventsCurrent, compareAndSortDates } from "../../lib/events";
import { compareAndSortArticlesByDate } from "../../lib/news";
import { getStrapiMedia } from "../../lib/media";
import { siteAddress } from "../../lib/api";
import {
  getAllMinistriesSlugs,
  getMinistryData,
  fetchAPI,
} from "../../lib/api";
import { useRouter } from "next/router";
// import { InstagramEmbed } from "react-social-media-embed";

import classes from "./slug.module.css";

export async function getStaticPaths() {
  const paths = await getAllMinistriesSlugs();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const ministryData = await getMinistryData(params.slug);
  const global = await fetchAPI("/global");

  return {
    props: {
      ministryData,
      global,
    },
    revalidate: 1,
  };
}

export default function Ministry({ ministryData, global }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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
    <Layout global={global}>
      <Seo
        metadata={ministryData.metadata}
        global={global}
        canonical={`${siteAddress}/ministries/${ministryData.slug}`}
      />
      <section>
        <h1 style={{ display: "none" }}>
          {ministryData.ministryName} Ministry
        </h1>
        <h2 className={classes.topInfo}>
          {ministryData.ministryName} Ministry
        </h2>
        <div className="row"></div>
        <div className={`row ${classes.topCols}`}>
          <div className="col span-1-of-8"></div>
          <div className={`col span-4-of-8 box ${classes.description}`}>
            <div
              dangerouslySetInnerHTML={{ __html: ministryData.description }}
            />
          </div>
          <div className={`col span-2-of-8 box`}>
            {ministryData.topEmbed ? (
              <div
                dangerouslySetInnerHTML={{ __html: ministryData.topEmbed }}
                className={classes.topEmbed}
              />
            ) : ministryData.leaderPhoto ? (
              <Image
                src={getStrapiMedia(ministryData.leaderPhoto.url)}
                alt={ministryData.leaderPhoto.alternativeText}
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
      {ministryData.embedCode ? (
        <section>
          <div className="row">
            <div
              style={{ margin: "auto", textAlign: "center" }}
              dangerouslySetInnerHTML={{ __html: ministryData.embedCode }}
            />
          </div>
        </section>
      ) : null}
    </Layout>
  );
}
