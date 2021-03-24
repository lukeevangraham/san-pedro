import { useEffect, useState } from "react";
import { keepEventsCurrent } from "../../../lib/events";

import DateBox from "../../Events/DateBox/DateBox";
import TopInfo from "../../Events/TopInfo/TopInfo";
import classes from "./TopCountdown.module.css";

const TopCountdown = ({ event }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  keepEventsCurrent([event]);

  const dateToCountTo = new Date(event.startDate).getTime();
  useEffect(() => {
    let timer = setInterval(() => {
      let currentDate = new Date().getTime();
      let seconds_left = (dateToCountTo - currentDate) / 1000;
      setDays(parseInt(seconds_left / 86400));
      seconds_left = seconds_left % 86400;

      setHours(parseInt(seconds_left / 3600));
      seconds_left = seconds_left % 3600;

      setMins(parseInt(seconds_left / 60));
      setSecs(parseInt(seconds_left % 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="row">
      <div className={classes.wrapper}>
        <div className={classes.firstColumn}>
          <div className={classes.dateBoxWrapper}>
            <DateBox event={event} fromHome />
          </div>
          <div className={classes.topInfoWrapper}>
            <TopInfo event={event} index fromHome />
          </div>
        </div>
        <div className={classes.countdownWrapper}>
          <div className={classes.countdownElement}>
            <div className={classes.num}>{days}</div>
            <div className={classes.label}>Day</div>
          </div>
          <div className={classes.countdownElement}>
            <div className={classes.num}>{hours}</div>
            <div className={classes.label}>Hrs</div>
          </div>
          <div className={classes.countdownElement}>
            <div className={classes.num}>{mins}</div>
            <div className={classes.label}>Min</div>
          </div>
          <div className={classes.countdownElement}>
            <div className={classes.num}>{secs}</div>
            <div className={classes.label}>Sec</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TopCountdown;
