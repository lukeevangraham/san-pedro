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
      <section style={{ padding: "0" }}>
        <div className="row" style={{ background: "#fff", padding: "80px 0" }}>
          <h2>{giving.givingPageTitle}</h2>
          {console.log("giving: ", giving)}
          <div className="col span-1-of-1">
            <Markdown source={giving.topText} />
            {giving.topButton.map((button) => (
              <Button button={button} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Giving;
