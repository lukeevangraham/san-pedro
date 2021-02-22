import Link from "next/link";
import classNames from "classnames";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";

import classes from "./TopInfo.module.css";

const TopInfo = ({ event, index, fromHome }) => (
  <div className={classes.moreInfo}>
    {index ? (
      <Link href={`/events/${event.slug}`}>
        <a className={classes.title}>{fromHome ? `UPCOMING EVENT: ${event.title}` :  event.title}</a>
      </Link>
    ) : (
      <div className={[classes.title, classes.titleNoLink].join(" ")}>{event.title}</div>
    )}
    <div className={classNames(classes.time, { [classes.fromHome]: fromHome })}>
      <IoCalendarClearOutline />
      {new Date(event.startDate).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
      })}
    </div>
    <div className={classNames(classes.location, { [classes.fromHome]: fromHome })}>
      <IoLocationOutline />
      {event.location}
    </div>
  </div>
);

export default TopInfo;
