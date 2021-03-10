import { getAllEventsSlugs, getEventData } from "../../lib/api";
import { keepEventsCurrent } from "../../lib/events";
import Seo from "../../components/elements/seo";
import Markdown from "react-markdown";
import Image from "next/image";
import DateBox from "../../components/Events/DateBox/DateBox";
import TopInfo from "../../components/Events/TopInfo/TopInfo";
import classes from "./slug.module.css";

export async function getStaticPaths() {
  const paths = await getAllEventsSlugs();
  console.log("paths: ", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const eventData = await getEventData(params.slug);
  // const global = await fetchAPI("/global");
  return {
    props: {
      eventData,
      // global
    },
    revalidate: 1,
  };
}

export default function Event({ eventData }) {
  keepEventsCurrent([eventData]);
  return (
    <>
      <Seo metadata={eventData.metadata} />
      <section style={{ padding: 0 }}>
        <div className={["row", classes.event].join(" ")}>
          <h1>Upcoming Event</h1>
          <div className="row">
            <div className="col span-1-of-2 box">
              <div className={classes.imageWrap}>
                {eventData.eventImage ? (
                  <Image
                    src={eventData.eventImage.url}
                    layout="fill"
                    objectFit="cover"
                  />
                ) : null}
              </div>
            </div>
            <div className="col span-1-of-2 box">
              <div className={classes.rightColumn}>
                <div className={classes.topRight}>
                  <div className={classes.dateBoxContainer}>
                    <DateBox event={eventData} />
                  </div>
                  <div className={classes.topInfo}>
                    <TopInfo event={eventData} />
                  </div>
                </div>
                <div className={classes.description}>
                  <Markdown source={eventData.description} />
                </div>
              </div>
            </div>
          </div>
          {eventData.bottomEmbed ? (
            <div dangerouslySetInnerHTML={{ __html: eventData.bottomEmbed }} />
          ) : null}
        </div>
      </section>
    </>
  );
}
