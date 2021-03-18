import Markdown from "react-markdown/with-html";
import Verse from "../components/sections/Verse/Verse";
import { fetchAPI } from "../lib/api";

import classes from "../styles/watch.module.css";

export async function getStaticProps() {
  const watch = await fetchAPI("/watch");
  return {
    props: {
      watch,
    },
    revalidate: 1,
  };
}

const Watch = ({ watch }) => (
  <>
    <section style={{ textAlign: "center" }}>
      <h2>{watch.pageTitle}</h2>
      <div className="row">
        {console.log("watch: ", watch.topText === `<p><br></p>`)}
        {watch.topText !== `<p><br></p>` ? (
          <div className="col span-2-of-2">
            <div style={{ marginBottom: "2.5rem" }}>
              <div dangerouslySetInnerHTML={{ __html: watch.topText }} />
            </div>
          </div>
        ) : null}
      </div>
      <div className="row">
        {watch.watchColumn.map((column, index, array) => (
          <div
            className={`col span-1-of-${array.length} ${classes.watchColumn}`}
            key={column.id}
          >
            <h3>{column.columnTitle}</h3>
            <div className={classes.videoWrapper}>
              <div dangerouslySetInnerHTML={{ __html: column.columnBody }} />
            </div>
          </div>
        ))}
      </div>
    </section>
    <Verse data={watch.verse} />
  </>
);

export default Watch;
