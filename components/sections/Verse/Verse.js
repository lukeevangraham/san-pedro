import ButtonLink from "../../elements/button-link";
import Image from "next/image";
// import { getButtonAppearance } from "utils/button";
import classes from "./Verse.module.css";
import Fade from "react-reveal/Fade";

const Verse = ({ data, global, whiteBg }) => {
  return (
    <section className={whiteBg === false ? null : classes.whiteBg}>
      <div className="row">
        <div className={classes.container}>
          <div className={classes.text}>
            <Fade top>
              <div dangerouslySetInnerHTML={{ __html: data.scripture }} />
              <div className={classes.reference}>{data.reference}</div>
            </Fade>
          </div>
          <div className={classes.verseWrapper}>
            <Image
              src={`https://res.cloudinary.com/diqgdacjy/image/upload/v1614294191/logo_Black_46cf7633db.jpg`}
              width={203}
              height={125}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verse;
