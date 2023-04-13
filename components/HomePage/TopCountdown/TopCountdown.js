import { useEffect, useState } from "react";
import { keepEventsCurrent, combineDateAndTime } from "../../../lib/events";
import moment from "moment";

import DateBox from "../../Events/DateBox/DateBox";
import TopInfo from "../../Events/TopInfo/TopInfo";
import classes from "./TopCountdown.module.css";

const TopCountdown = ({ event }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  keepEventsCurrent([event]);

  let reg = /-|:|T|\+/; //The regex on which matches the string should be split (any used delimiter) -> could also be written like /[.:T\+]/

  // console.log(`19: ${event.startDate}&${event.time}`);

  const momentDateToCountTo = moment(
    `${event.startDate} ${event.time} -0500`,
    "YYYY-MM-DD hh:mm a Z"
  );

  const newDateToCountTo = new Date(momentDateToCountTo.toISOString(true));



  const dateBeforeConversionToJs = combineDateAndTime(event).split(reg);

  // const dateToCountTo = new Date(
  //   dateBeforeConversionToJs[0],
  //   dateBeforeConversionToJs[1] - 1,
  //   dateBeforeConversionToJs[2],
  //   dateBeforeConversionToJs[3],
  //   dateBeforeConversionToJs[4],
  //   dateBeforeConversionToJs[5]
  //   // "00",
  //   // "GMT-0800"
  // );

  useEffect(() => {
    let timer = setInterval(() => {
      let currentDate = new Date().getTime();
      let seconds_left = (newDateToCountTo - currentDate) / 1000;
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
