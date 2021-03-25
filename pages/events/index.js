import { getSortedEventsData } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import { DefaultSeo } from "next-seo";
import EventCard from "../../components/Events/EventCard/EventCard";
// import faker from "faker";
import Zoom from "react-reveal/Zoom"

import classes from "./index.module.css";

export async function getStaticProps() {
  const allEventsData = await getSortedEventsData();
  // const global = await fetchAPI("/global");

  return {
    props: {
      allEventsData,
      // global
    },
    revalidate: 1,
  };
}

const Events = ({ allEventsData, global }) => {
//   const createEvent = () => {
//     return {
//       id: faker.random.number(),
//       title: faker.lorem.words(),
//       slug: faker.lorem.slug(),
//       startDate: faker.date.between('2020-07-30', '2021-07-30'),
//       endDate: faker.date.soon(9),
//       repeatsEveryDays: Math.floor(Math.random() * 8),
//       location: faker.lorem.word(),
//       description: faker.lorem.paragraph(),
//       updated_at: faker.date.past(),
//       eventImage: {
//         id: faker.random.number(),
//         name: faker.lorem.words(),
//         alternativeText: faker.lorem.words(),
//         caption: faker.lorem.sentence(),
//         url: faker.random.image(),
//       },
//       ministries: [
//         {
//           id: faker.random.number(),
//           ministryName: faker.lorem.word(),
//         },
//       ],
//     };
//   };

//   const createEvents = (numEvents = 6) => {
//     return new Array(numEvents).fill(undefined).map(createEvent);
//   };

//   const fakeEvents = createEvents(6);

//   console.log("events: ", fakeEvents);
  return (
    <>
    <DefaultSeo
        titleTemplate={`%s | ${global.metaTitleSuffix}`}
        title={"Events"}
        description={"Events held and scheduled by San Pedro Presbyterian Church"}
        openGraph={{
          images: Object.values(global.metadata.shareImage.formats).map((image) => {
            return {
              url: getStrapiMedia(image.url),
              width: image.width,
              height: image.height,
            };
          }),
        }}
      />
    <section>
      <h2>Current Events</h2>
      <div className="row">
        <div className={classes.grid}>
          {/* {fakeEvents.map((event) => ( */}
          {allEventsData.map((event) => (
            <EventCard event={event} key={event.id} index={true} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Events;
