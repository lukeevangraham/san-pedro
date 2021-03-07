import Markdown from "react-markdown/with-html";
import Seo from "../../components/elements/seo";
import Image from "next/image";
import NewsCard from "../../components/News/NewsCard/NewsCard";
import EventCard from "../../components/Events/EventCard/EventCard";
import { keepEventsCurrent, compareAndSortDates } from "../../lib/events";
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
  // const currentMinistryEvents = keepEventsCurrent(ministryData.events)

  const oldEventsRemoved = ministryData.events.filter(
    (event) => event.endDate >= new Date().toISOString()
  );

  const recurringEventsMadeCurrent = keepEventsCurrent(oldEventsRemoved);

  const sortedDates = recurringEventsMadeCurrent.sort(compareAndSortDates);

  console.log("NEW: ", sortedDates);

  return (
    <>
      {console.log("ministryData: ", ministryData)}
      <Seo metadata={ministryData.metadata} />
      <section>
        <div className="row">
          <div className={`col span-2-of-2 ${classes.topInfo}`}>
            <h2>{ministryData.ministryName} Ministry</h2>
          </div>
        </div>
        <div className="row">
          <div className="col span-1-of-8"></div>
          <div className={`col span-4-of-8 ${classes.description}`}>
            <Markdown source={ministryData.description} />
          </div>
          <div className={`col span-2-of-8`}>
            <Image
              src={getStrapiMedia(ministryData.leaderPhoto.url)}
              width={272}
              height={310}
              layout="responsive"
              className={classes.leaderPhoto}
            />
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: "linear-gradient(to bottom right, #f5f5f5, #f3f3f3)",
        }}
      >
        <div className="row">
          <div className={`col span-2-of-2 ${classes.topInfo}`}>
            <h2>Latest {ministryData.ministryName} Ministry News</h2>
          </div>
          <div className="row">
            <div className="col span-2-of-2">
              <div className={classes.grid}>
                {ministryData.news.map((article) => (
                  <NewsCard article={article} key={article.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className={`col span-2-of-2 ${classes.topInfo}`}>
            <h2>Upcoming {ministryData.ministryName} Ministry Events</h2>
          </div>
          <div className="row">
            <div className="col span-2-of-2">
              <div className={classes.grid}>
                {sortedDates.map((event) => (
                  <EventCard event={event} key={event.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
