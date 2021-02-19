import { getAllEventsSlugs, getEventData } from "../../lib/api";
import Seo from "../../components/elements/seo";
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
  return (
    <>
      <Seo metadata={eventData.metadata} />
      <section>
        <h1>Upcoming Event</h1>
        <div className="row">
          <div className="col span-1-of-2">
            <div className={classes.imageWrap}>
              <Image
                src={eventData.eventImage.url}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="col span-1-of-2">
            <div className={classes.topInfo}>
              <div className={classes.dateBoxContainer}>
                <DateBox event={eventData} />
              </div>
              <TopInfo event={eventData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
