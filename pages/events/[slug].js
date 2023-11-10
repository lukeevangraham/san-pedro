import "@fontsource/cardo";
import { getAllEventsSlugs, getEventData, fetchAPI, siteAddress } from "../../lib/api";
import { keepEventsCurrent } from "../../lib/events";
import Layout from "../../hoc/Layout/Layout";
import Seo from "../../components/elements/seo";
import Markdown from "react-markdown";
import Image from "next/image";
import DateBox from "../../components/Events/DateBox/DateBox";
import TopInfo from "../../components/Events/TopInfo/TopInfo";
import classes from "./slug.module.css";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const paths = await getAllEventsSlugs();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const eventData = await getEventData(params.slug);
  const global = await fetchAPI("/global");
  return {
    props: {
      eventData,
      global,
    },
    revalidate: 1,
  };
}

export default function Event({ eventData, global }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  keepEventsCurrent([eventData]);

  return (
    <Layout global={global}>
      <Seo
        metadata={eventData.metadata}
        global={global}
        referer={eventData.title}
        description={eventData.description}
        canonical={`${siteAddress}/events/${eventData.slug}`}
      />
      <section style={{ padding: 0 }}>
        <div className={["row", classes.event].join(" ")}>
          <h1 style={{ display: "none" }}>{eventData.title}</h1>
          <h2>Upcoming Event</h2>
          <div className="row">
            <div className="col span-1-of-2 box">
              <div className={classes.imageWrap}>
                {eventData.eventImage ? (
                  <Image
                    src={eventData.eventImage.url}
                    alt={eventData.eventImage.alternativeText}
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                  />
                ) : null}
              </div>
            </div>
            <div className="col span-1-of-2 box">
              <div className={classes.rightColumn}>
                <div className={classes.topRight}>
                  <Fade>
                    <div className={classes.dateBoxContainer}>
                      <DateBox event={eventData} />
                    </div>
                  </Fade>
                  <div className={classes.topInfo}>
                    <Fade>
                      <TopInfo event={eventData} />
                    </Fade>
                  </div>
                </div>
                <div className={classes.description}>
                  <div
                    dangerouslySetInnerHTML={{ __html: eventData.description }}
                  />
                </div>
              </div>
            </div>
          </div>
          {eventData.bottomEmbed ? (
            <div dangerouslySetInnerHTML={{ __html: eventData.bottomEmbed }} />
          ) : null}
        </div>
      </section>
    </Layout>
  );
}
