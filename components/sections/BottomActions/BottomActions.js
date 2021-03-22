// import ButtonLink from "../../elements/button-link";
import classNames from "classnames";
import Button from "../../UI/Button/Button";
// import { getButtonAppearance } from "utils/button";

import classes from "./BottomActions.module.css";

const BottomActions = ({ data }) => {
  return (
    <section className={classes.section}>
      {/* <section className="bg-primary-800 py-20 text-center"> */}
      <h2 style={{ color: "#fff" }}>{data.title}</h2>
      <div className="row">
        {/* Buttons row */}
        {/* <div className="container flex flex-row justify-center flex-wrap gap-4"> */}
        <div className={classes.buttonWrap}>
          {/* THE LINE BELOW WAS A PROP FROM THE MAP BELOW */}
          {/* appearance={getButtonAppearance(button.type, "dark")} */}
          {data.buttons.map((button) => (
            <Button button={button} key={button.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomActions;
