import Markdown from "react-markdown";
import Button from "../../UI/Button/Button";
import Image from "../../elements/image";
// import { getButtonAppearance } from "utils/button";

import classNames from "classnames"

import classes from "./Hero.module.css"

const Hero = ({ data }) => {
  {/* <main className="container flex flex-col md:flex-row items-center justify-between py-12"> */}
  return (
    <main className={classNames("row", classes.main)}>
      {/* Left column for content */}
      <div className="flex-1 sm:pr-8">
        {/* Hero section label */}
        <p className={classes.label}>{data.label}</p>
        {/* Big title */}
        <div className={classNames(classes.whiteText, classes.title)}>{data.title}</div>
        {/* Description paragraph */}
        <p className={[classes.whiteText, classes.description].join(" ")}>{data.description}</p>
        {/* Buttons row */}
        <div className={classes.buttonRow}>
          {data.buttons.map((button) => (
            <Button
              button={button}
              key={button.id}
            />
          ))}
        </div>
        {/* Small rich text */}
        <div className={[classes.smallText, classes.whiteText].join(" ")}>
          <Markdown source={data.smallTextWithLink} />
        </div>
      </div>
      {/* Right column for the image */}
      {/* <Image
        media={data.picture}
        className="flex-shrink-0 object-contain w-full md:w-6/12 mt-6 md:mt-0"
      /> */}
    </main>
  );
};

export default Hero;
