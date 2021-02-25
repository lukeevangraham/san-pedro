import React from "react";
import Image from "next/image";
import { getStrapiMedia } from "../../lib/media";
import Markdown from "react-markdown";
import NewsCard from "../News/NewsCard/NewsCard";
import EventCard from "../Events/EventCard/EventCard";
import TopCountdown from "./TopCountdown/TopCountdown";
import classes from "./HomePage.module.css";

const HomePage = ({ data }) => {
  let videoUrl = data.topVideoEmbed.split(`src="`);

  return (
    <>
      <TopCountdown event={data.topEvent} />

      <section className={[classes.second, classes.whiteBg].join(" ")}>
        <h2>{data.introTitle}</h2>
        <div className={["row", classes.welcomeWrap].join(" ")}>
          <div className="col span-1-of-2">
            <div className={classes.videoWrapper}>
              <iframe
                className={classes.responsiveIframe}
                width="560"
                height="315"
                src={`${videoUrl[1].split(`" `)[0]}?modestbranding=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col span-1-of-2">
            <Markdown source={data.introBox} />
          </div>
        </div>
      </section>

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

      <section className={classes.sectionPhotos}>
        <ul className={classes.photoShowcase}>
          {data.photoShowcase.map((photo) => (
            <li>
              <figure className={classes.showcasePhoto}>
                {/* <img src={getStrapiMedia(photo.url)} alt=""/> */}
                <Image
                  src={getStrapiMedia(photo.url)}
                  width={800}
                  height={600}
                />
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section className={[classes.whiteBg].join(" ")}>
        <div className="row">
          <h2>Section title</h2>
          <div className="col">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse rhoncus consequat massa, vel vulputate orci molestie
              eu. Suspendisse ullamcorper neque ultricies justo euismod gravida.
              Cras lobortis commodo arcu vitae auctor. Maecenas tristique ante
              sed enim consequat congue. Vestibulum iaculis ac orci at auctor.
              Sed rutrum turpis nunc, sed vehicula neque ornare eget.
              Suspendisse euismod velit quis tempor consequat. Mauris quis
              tellus in dui dictum congue. Sed consectetur risus sem, quis
              gravida ipsum eleifend at. In vulputate nulla est.
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
};

export default HomePage;
