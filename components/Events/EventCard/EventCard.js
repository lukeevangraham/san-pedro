import Image from "next/image";
import Link from "next/link";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";

import classes from "./EventCard.module.css";

const EventCard = ({ event }) => (
  <div className={classes.eventsCard}>
    <Link href={`/news/${event.slug}`}>
      <a>
        <div className={classes.ratioWrapper}>
          <Image
            src={event.eventImage.url}
            alt={event.eventImage.alternativeText}
            layout="fill"
            sizes="(max-width: 480px) 100vw, 33vw"
          />
          {/* <img
              className="responsiveImage"
              src={getStrapiMedia(event.image.formats.medium.url)}
              // src={event.image.formats.medium.url}
              alt={event.image.alternativeText}
            /> */}
        </div>
      </a>
    </Link>
    <div className={classes.belowPicture}>
      <div className={classes.dateBox}>
        <div className={classes.month}>
          {new Date(event.startDate).toLocaleDateString("en-US", {
            month: "short",
          })}
        </div>
        <div className={classes.day}>
          {new Date(event.startDate).toLocaleDateString("en-US", {
            day: "numeric",
          })}
        </div>
        <div className={classes.weekday}>
          {new Date(event.startDate).toLocaleDateString("en-US", {
            weekday: "short",
          })}
        </div>
      </div>

      <div className={classes.moreInfo}>
        <Link href={`/news/${event.slug}`}>
          <a className={classes.title}>{event.title}</a>
        </Link>
        <div className={classes.time}>
          <IoCalendarClearOutline />
          {new Date(event.startDate).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </div>
        <div className={classes.location}>
          <IoLocationOutline />
          {event.location}
        </div>
      </div>

      {/* <p className={classes.excerpt}>
          {truncate(event.body, 100, true)}&hellip;
        </p> */}
      {/* <div className={classes.moreInfo}>
          {event.ministries ? (
            event.ministries.length ? (
              <div className={classes.moreInfoDetail}>
                <>
                  <IoPeopleCircleOutline />
                  <div className={classes.moreInfoDetail}>
                    {event.ministries[0].ministryName}
                  </div>
                </>
              </div>
            ) : null
          ) : null}

          <div className={classes.moreInfoDetail}>
            <IoCalendarOutline />
            {new Date(event.published_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div> */}
    </div>
    {/* {console.log("e: ", event)} */}
  </div>
);

export default EventCard;
