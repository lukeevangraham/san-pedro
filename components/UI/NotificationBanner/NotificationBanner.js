import Markdown from "react-markdown";
import classNames from "classnames";
import { IoCloseOutline } from "react-icons/io5";

import classes from "./NotificationBanner.module.css";

const NotificationBanner = ({ data: { text, type }, closeSelf }) => {
  return (
    <div className={classes.bg}>
      <div className={classNames("row", classes.inside)}>
        <div className={classes.text} dangerouslySetInnerHTML={{__html: text}} />
        <button className={classes.button} onClick={closeSelf}>
          <IoCloseOutline className={classes.icon} />
        </button>
      </div>
    </div>
  );
};

export default NotificationBanner;
