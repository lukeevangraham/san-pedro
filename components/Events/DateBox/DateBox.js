import "@fontsource/source-sans-pro/200.css";
import moment from "moment";
import classNames from "classnames";
import classes from "./DateBox.module.scss";

const DateBox = ({ event, fromHome }) => {

  const date = moment(event.startDate, "YYYY-MM-DD")

return (
  // <div className={classes.dateBox}>
  <div
    className={classNames(classes.dateBox, { [classes.fromHome]: fromHome })}
  >
    <div className={classes.month}>
      {date.format("MMM")}
    </div>
    {/* {console.log("E: ", event)} */}
    <div className={classes.day}>
      {date.format("D")}
    </div>
    <div className={classes.weekday}>
      {date.format("ddd")}
    </div>
  </div>
)};

export default DateBox;
