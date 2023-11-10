import React from "react";
import Image from "next/image";
import { getStrapiMedia } from "../../lib/media";
import { keepEventsCurrent, compareAndSortDates } from "../../lib/events";
import { compareAndSortArticlesByDate } from "../../lib/news";
import Markdown from "react-markdown/with-html";
import NewsCard from "../News/NewsCard/NewsCard";
import EventCard from "../Events/EventCard/EventCard";
import TopCountdown from "./TopCountdown/TopCountdown";
import Verse from "../sections/Verse/Verse";
import classes from "./HomePage.module.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import moment from "moment-timezone";

const HomePage = ({ data }) => {
  let videoUrl = data.topVideoEmbed.split(`src="`);

  // GETTING RID OF EVENTS THAT HAPPENED AND DON'T REPEAT
  const oldEventsRemoved = data.featuredEvents.filter(
    (event) =>
      event.endDate >= moment().tz("America/Chicago").format("YYYY-MM-DD")
  );

  // BRINGING REPEATING EVENTS UP TO CURRENT ITERATION
  const recurringEventsMadeCurrent = keepEventsCurrent(oldEventsRemoved);

  // SORTING THE DATES LEFT
  const sortedEvents = recurringEventsMadeCurrent.sort(compareAndSortDates);

  // SORTING THE NEWS ITEMS
  const sortedArticles = data.news.sort(compareAndSortArticlesByDate);

  return (
    <>
      <TopCountdown event={data.topEvent} />

      <section className={[classes.second, classes.whiteBg].join(" ")}>
        <h2>{data.introTitle}</h2>
        <div className={["row", classes.welcomeWrap].join(" ")}>
          <div className="col span-1-of-2">
            <Fade>
              <div className={classes.videoWrapper}>
                <iframe
                  className={classes.responsiveIframe}
                  width="560"
                  height="315"
                  src={`${videoUrl[1].split(`" `)[0]}?modestbranding=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube embed"
                ></iframe>
              </div>
            </Fade>
          </div>
          <div className={`col span-1-of-2 box ${classes.introBox}`}>
            <Fade>
              <div dangerouslySetInnerHTML={{ __html: data.introBox }} />
            </Fade>
            <div>
              <p className={classes.QuickLinkTitle}>Quick Links</p>
              {data.HomeQuickLink.map((link) => (
                <div key={link.id} className={classes.QuickLink}>
                  <div className={classes.QuickLinkImage}>
                    <Image
                      src={link.Image.url}
                      alt={link.Image.alternativeText}
                      height="16px"
                      width="16px"
                    />
                  </div>
                  <div className={classes.QuickLinkText}>
                    {link.Name} -{" "}
                    <a
                      href={link.Link.url}
                      target={link.Link.newTab ? "_blank" : "_self"}
                    >
                      {link.Link.text}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="row">
          <div className="col span-2-of-2">
            <h2>Featured Events</h2>
            {/* <div className="row"> */}
            <div className={classes.grid}>
              {/* <Zoom style={{ margin: "auto 0" }}> */}
              {sortedEvents.map((event, index) =>
                index < 3 ? (
                  <EventCard event={event} key={event.id} index={true} />
                ) : null
              )}
              {/* </Zoom> */}
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      <Verse
        data={
          data.contentSections.filter(
            (section) => section.__component === "sections.verse"
          )[0]
        }
      />

      <section className={classes.sectionPhotos}>
        <ul className={classes.photoShowcase}>
          {data.photoShowcase.map((photo) => (
            <li key={photo.id}>
              <figure className={classes.showcasePhoto}>
                {/* <img src={getStrapiMedia(photo.url)} alt=""/> */}
                <Image
                  src={getStrapiMedia(photo.url)}
                  alt={photo.alternativeText}
                  width={800}
                  height={600}
                />
              </figure>
            </li>
          ))}
        </ul>
      </section>

      {/* <section className={[classes.whiteBg].join(" ")}>
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
      </section> */}

      <section>
        <div className="row">
          <div className="col">
            <h2>Featured News</h2>
            {/* <div className="row"> */}

            <div className={classes.grid}>
              {sortedArticles.map((article, index) =>
                index < 3 ? (
                  <NewsCard article={article} key={article.id} />
                ) : null
              )}
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default HomePage;
