import Logo from "../../../Logo/Logo";
import Image from "next/image";

import classes from "./HomeHeroC.module.scss";

const HomeHeroC = ({ data, logoURL }) => (
  <div className={classes.Hero}>
    {data.picture.provider_metadata.resource_type === "video" ? (
      <div className={classes.Hero__Container}>
        <div className={classes.Hero__Container__Text}>
          <div className={classes.Hero__Container__Text__Title}>
            {data.title}
          </div>
          <div className={classes.Hero__Container__Text__Description}>
            {data.description}
          </div>
          <div
            className={classes.Hero__Container__Text__Body}
            dangerouslySetInnerHTML={{ __html: data.smallTextWithLink }}
          />
        </div>
        <video
          autoPlay
          loop
          muted
          className={classes.Hero__Container__heroBgVideo}
          playsInline
        >
          <source src={data.picture.url} />
        </video>
      </div>
    ) : (
      // <video
      //   autoPlay
      //   loop
      //   muted
      //   className={classes.Hero__heroBgVideo}
      //   playsInline
      // >
      //   <source src={props.data.picture.url} />
      // </video>
      <Image
        src={data.picture.url}
        alt={data.picture.alternativeText}
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        className={classes.heroBgImage}
      />
    )}
  </div>
);

export default HomeHeroC;
