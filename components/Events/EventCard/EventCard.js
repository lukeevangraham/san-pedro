import Image from "next/image";
import Link from "next/link";
import DateBox from "../DateBox/DateBox";
import TopInfo from "../TopInfo/TopInfo";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";
import Fade from "react-reveal/Fade";

import classes from "./EventCard.module.css";

const EventCard = ({ event, index }) => (
  <div className={classes.eventsCard}>
    <Link href={`/events/${event.slug}`}>
      <a aria-label={event.title}>
        <div className={classes.ratioWrapper}>
          {event.eventImage ? (
            <Image
              src={event.eventImage.url}
              alt={event.eventImage.alternativeText}
              layout="fill"
              sizes="(max-width: 480px) 100vw, 33vw"
            />
          ) : null}
        </div>
      </a>
    </Link>
    <div className={classes.belowPicture}>
      <DateBox event={event} />

      <div className={classes.topInfoContainer}>
        <TopInfo event={event} index={index} />
      </div>
      {/* <div className={classes.moreInfo}>
        <Link href={`/events/${event.slug}`}>
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
      </div> */}

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
