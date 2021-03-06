import "@fontsource/source-sans-pro/200.css";
import classNames from "classnames";
import classes from "./DateBox.module.css";

const DateBox = ({ event, fromHome }) => (
  // <div className={classes.dateBox}>
  <div className={classNames(classes.dateBox, { [classes.fromHome]: fromHome })}>
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
);

export default DateBox;
