import { getSortedMinistriesData, fetchAPI } from "../../lib/api";
import Link from "next/link";
import classNames from "classnames";

import classes from "./index.module.css";

export async function getStaticProps() {
  const allMinistriesData = await getSortedMinistriesData();

  return {
    props: {
      allMinistriesData,
    },
    revalidate: 1,
  };
}

const Ministries = ({ allMinistriesData }) => {
  return (
    <section>
      <h2>Ministries</h2>
      <div className={`row ${classes.ministriesContainer}`}>
        {allMinistriesData.map((ministry) => (
          <div key={ministry.id} className={classes.ministry}>
            <Link href={`ministries/${ministry.slug}`}>
              <a>{ministry.ministryName}</a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ministries;
