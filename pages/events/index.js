import { getSortedEventsData } from "../../lib/api"
import EventCard from "../../components/Events/EventCard/EventCard"

import classes from "./index.module.css"

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
    // const createArticle = () => {
    //   return {
    //     id: faker.random.number(),
    //     title: faker.lorem.words(),
    //     slug: faker.lorem.slug(),
    //     shortName: faker.lorem.words(),
    //     author: faker.name.findName(),
    //     body: faker.lorem.text(),
    //     published_at: faker.date.past(),
    //     created_at: faker.date.past(),
    //     updated_at: faker.date.past(),
    //     image: {
    //       formats: {
    //         medium: {
    //           url: faker.random.image(),
    //         },
    //       },
    //     },
    //     ministries: []
    //   };
    // };
  
    // const createArticles = (numArticles = 6) => {
    //   return new Array(numArticles).fill(undefined).map(createArticle);
    // };
  
    // const fakeArticles = createArticles(6);
  
    // console.log("article: ", fakeArticles);
    return (
      <section>
        <h1>Current Events</h1>
        {/* <h2>Here are the news pages:</h2> */}
        <div className="row">
          <div className={classes.grid}>
            {/* {fakeArticles.map((event) => ( */}
          {allEventsData.map((event) => (
              <EventCard event={event} key={event.id} />
          ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Events;