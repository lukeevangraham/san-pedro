// import Markdown from "react-markdown";
// import ButtonLink from "../../elements/button-link";
// import Image from "../../elements/image";
import Image from "next/image";
import Button from "../../UI/Button/Button";
// import Image from "next/image"
// import { getButtonAppearance } from "utils/button";

import classes from "./Hero.module.css";

const Hero = ({ data }) => {
  return (
    <section>
      <div className={`row ${classes.parent}`}>
        {/* <div className="col span-1-of-2"> */}
        {/* <section className="container flex flex-col md:flex-row items-center justify-between py-12"> */}
        {/* Left column for content */}
        <div className={`col span-1-of-2 ${classes.leftCol}`}>
          {/* Hero section label */}
          <p className={classes.label}>{data.label}</p>
          {/* Big title */}
          <h1 className={classes.title}>{data.title}</h1>
          {/* Description paragraph */}
          <p className="text-xl mb-6">{data.description}</p>
          {/* Buttons row */}
          {/* <div className="flex flex-row flex-wrap gap-4"> */}
          <div className={classes.buttons}>
            {data.buttons.map((button) => (
              <Button button={button} fromHeroSection />
            ))}
          </div>
          {/* Small rich text */}
          {/* <div className="text-base md:text-sm mt-4 sm:mt-3 rich-text-hero"> */}
          <div className={classes.smallText}>
            <div
              dangerouslySetInnerHTML={{ __html: data.smallTextWithLink }}
            ></div>
          </div>
        </div>
        {/* </div> */}
        {/* Right column for the image */}
        {/* <div className="col span-1-of-2"> */}
        {/* <Image
            src={data.picture.url}
            layout="fill"
            objectFit="contain"
            objectPosition="right top"
            className="flex-shrink-0 object-contain w-full md:w-6/12 mt-6 md:mt-0"
          /> */}
        <div className={`col span-1-of-2`}>
          <div
            style={{
              width: "100%",
              height: "383px",
              position: "relative",
            }}
          >
            <Image src={data.picture.url} layout="fill" objectFit="contain" alt={data.picture.alternativeText} />
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;
