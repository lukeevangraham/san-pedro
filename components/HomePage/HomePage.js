import React from "react";
import NewsCard from "../News/NewsCard/NewsCard";
import EventCard from "../Events/EventCard/EventCard";
import TopCountdown from "./TopCountdown/TopCountdown"
import classes from "./HomePage.module.css";

const HomePage = ({ data }) => (
  <>
    <TopCountdown event={data.topEvent} />
    <section>
      <div className="row">
        <div className="col">
          <h2>Featured Events</h2>
          {/* <div className="row"> */}
          <div className={classes.grid}>
            {data.featuredEvents.map((event) => (
              <EventCard event={event} key={event.id} index={true} />
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>

    <section className={[classes.second].join(" ")}>
      <div className="row">
        <h2>Section title</h2>
        <div className="col">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            rhoncus consequat massa, vel vulputate orci molestie eu. Suspendisse
            ullamcorper neque ultricies justo euismod gravida. Cras lobortis
            commodo arcu vitae auctor. Maecenas tristique ante sed enim
            consequat congue. Vestibulum iaculis ac orci at auctor. Sed rutrum
            turpis nunc, sed vehicula neque ornare eget. Suspendisse euismod
            velit quis tempor consequat. Mauris quis tellus in dui dictum
            congue. Sed consectetur risus sem, quis gravida ipsum eleifend at.
            In vulputate nulla est.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div className="row">
        <div className="col">
          <h2>Featured News</h2>
          {/* <div className="row"> */}
          <div className={classes.grid}>
            {data.news.map((article) => (
              <NewsCard article={article} key={article.id} />
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  </>
);

export default HomePage;
