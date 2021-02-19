import { getAllEventsSlugs, getEventData } from "../../lib/api";
import Seo from "../../components/elements/seo";

export async function getStaticPaths() {
    const paths = await getAllEventsSlugs();
    console.log("paths: ", paths);
    return {
      paths,
      fallback: false,
    };
  }

  export async function getStaticProps({ params }) {
    const eventData = await getEventData(params.slug);
    // const global = await fetchAPI("/global");
    return {
      props: {
        eventData,
        // global
      },
      revalidate: 1,
    };
  }

  export default function Event({ eventData }) {
    return (
      <>
        <Seo metadata={eventData.metadata} />
        <section style={{ backgroundColor: "rgb(252, 252, 252)" }}>
          <div className="row">
            {eventData.title}
          </div>
        </section>
      </>
    );
  }
  