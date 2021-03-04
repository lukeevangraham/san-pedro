import { fetchAPI } from "../lib/api";
import Image from "next/image";
import Button from "../components/UI/Button/Button";
import Markdown from "react-markdown";
import Sections from "../components/sections/sections";

import classes from "../styles/giving.module.css";

export async function getStaticProps() {
  const giving = await fetchAPI("/giving");
  return {
    props: {
      giving,
    },
    revalidate: 1,
  };
}

const Giving = ({ global, giving }) => {
  // Making sure we don't render the hero (first section)
  let renderSections = giving.mainContent ? (
    <Sections sections={giving.mainContent} preview={null} />
  ) : (
    <div>Loading...</div>
  );

  return (
    <>
      <section style={{ background: "#fff" }}>
        <h2>{giving.givingPageTitle}</h2>
        <div className="row">
          {console.log("giving: ", giving)}
          <div className={classes.topText}>
            <Markdown source={giving.topText} />
            <div className={classes.topButtons}>
              {giving.topButton.map((button) => (
                <Button button={button} key={button.id} />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col span-2-of-2">You can also:</div>
        </div> */}

        <div className="row">
          {giving.moreWaysToGive.map((givingMethod, index, array) => (
            <div
              className={`col span-1-of-${array.length}`}
              key={givingMethod.id}
            >
              <Image
                src={givingMethod.icon.url}
                width={55}
                height={55}
                className={classes.icon}
              />
              <div className={classes.methodTitle}>{givingMethod.title}</div>
              <Markdown source={givingMethod.description} className={classes.methodDescription} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Giving;
