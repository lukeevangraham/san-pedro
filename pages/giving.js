import { fetchAPI } from "../lib/api";
import Button from "../components/UI/Button/Button";
import Markdown from "react-markdown";
import Sections from "../components/sections/sections";

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
        <div className="row">
          <h2>{giving.givingPageTitle}</h2>
          {console.log("giving: ", giving)}
          <div className="col span-1-of-1">
            <Markdown source={giving.topText} />
            {giving.topButton.map((button) => (
              <Button button={button} />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col span-1-of-1">You can also</div>
        </div>

        <div className="row">
          {giving.moreWaysToGive[0].features.map(
            (givingMethod, index, array) => (
              <div
                className={`col span-1-of-${array.length}`}
                key={givingMethod.id}
              >
                <div>{givingMethod.title}</div>
                <Markdown source={givingMethod.description} />
              </div>
            )
          )}
        </div>
      </section>

      <section>
        <div className="row">
          <div className="col">Hello</div>
        </div>
      </section>
    </>
  );
};

export default Giving;
