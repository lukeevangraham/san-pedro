import Image from "next/image";
import classes from "./EventCard.module.css";

const EventCard = ({ event }) => (
  <>
    <h3>{event.title}</h3>
    {console.log("e: ", event)}
    <div className={classes.ratioWrapper}>
      <Image src={event.eventImage.url} layout="fill" />
    </div>
  </>
);

export default EventCard;
