import { fetchAPI } from "../lib/api";
import Image from "next/image";
import Button from "../components/UI/Button/Button";
import Markdown from "react-markdown";
import Sections from "../components/sections/sections";
import Verse from "../components/sections/Verse/Verse"

import classes from "../styles/giving.module.css"

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
  let renderSections = giving.bottomVerse ? (
    <Sections sections={[giving.bottomVerse]} preview={null} />
  ) : (
    <div>Loading...</div>
  );

  return (
    <>
      <section style={{ background: "#fff" }}>
        <div className="row">
          <h2>{giving.givingPageTitle}</h2>
          {console.log("giving: ", giving)}
          <div className="col span-2-of-2">
            <Markdown source={giving.topText} />
            {giving.topButton.map((button) => (
              <Button button={button} key={button.id} />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col span-1-of-1">You can also</div>
        </div>

        <div className="row">
          {giving.moreWaysToGive.map((givingMethod, index, array) => (
            <div
              className={`col span-1-of-${array.length}`}
              key={givingMethod.id}
            >
              <Image src={givingMethod.icon.url} width={55} height={55} className={classes.icon} />
              <div>{givingMethod.title}</div>
              <Markdown source={givingMethod.description} />
            </div>
          ))}
        </div>
      </section>
      <Verse data={giving.bottomVerse} />
    </>
  );
};

export default Giving;
