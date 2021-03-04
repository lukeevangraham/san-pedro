import Markdown from "react-markdown/with-html";
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
        <div className="col span-2-of-2">
          <div style={{ marginBottom: "2.5rem" }}>
            <Markdown source={watch.topText} allowDangerousHtml />
          </div>
        </div>
      </div>
      <div className="row">
        {watch.watchColumn.map((column, index, array) => (
          <div
            className={`col span-1-of-${array.length} ${classes.watchColumn}`}
            key={column.id}
          >
            <h3>{column.columnTitle}</h3>
            <Markdown source={column.columnBody} allowDangerousHtml />
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Watch;
