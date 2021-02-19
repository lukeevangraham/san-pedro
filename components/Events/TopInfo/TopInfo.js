import Link from "next/link";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";

import classes from "./TopInfo.module.css";

const TopInfo = ({ event, index }) => (
  <div className={classes.moreInfo}>
    {index ? (
      <Link href={`/events/${event.slug}`}>
        <a className={classes.title}>{event.title}</a>
      </Link>
    ) : (
      <div className={[classes.title, classes.titleNoLink].join(" ")}>{event.title}</div>
    )}
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
);

export default TopInfo;
