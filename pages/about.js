import Layout from "../hoc/Layout/Layout";
import Image from "next/image";
import { fetchAPI } from "../lib/api";

export async function getStaticProps() {
  const about = await fetchAPI("/about");
  return {
    props: {
      about,
    },
    revalidate: 1,
  };
}

const About = ({ global, about }) => {
  return (
    <>
      <section>
        <h2>{about.topText}</h2>
        <div
          className="row"
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div className="col span-1-of-2">
            <Image src={about.topSideImage.url} width={450} height={470} />
          </div>
          <div className="col span-1-of-2">{about.historyText}</div>
        </div>
      </section>
      <section>
        <h2>{about.pastorSectionTitle}</h2>
        <div className="row">
          {about.leaderInfo.map((leader, index, array) => (
            <div
              className={`col span-1-of-${array.length}`}
              key={leader.id}
              style={{ textAlign: "center" }}
            >
              <Image
                src={leader.image.url}
                alt={leader.image.alternativeText}
                width={360}
                height={360}
              />
              <div>{`${leader.title ? leader.title : ""} ${leader.firstName} ${
                leader.lastName
              }`}</div>
            </div>
          ))}
        </div>
      </section>
      {console.log(about)}
    </>
  );
};

export default About;
