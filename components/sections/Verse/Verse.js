import ButtonLink from "../../elements/button-link";
import Image from "next/image";
// import { getButtonAppearance } from "utils/button";
import classes from "./Verse.module.css";

const Verse = ({ data, global }) => {
  return (
    <section className={classes.whiteBg}>
      <div className="row">
          <div className={classes.container}>
            <div className={classes.text}>"{data.scripture}"</div>
            <div className={classes.verseWrapper}>
              <Image
                src={`https://admin.sanpedropc.org/uploads/logo_color_eb957aee2e.png`}
                width={179}
                height={125}
              />
            </div>
          </div>
      </div>
    </section>
  );
};

export default Verse;
