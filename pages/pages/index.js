import { getSortedPageData, fetchAPI } from "../../lib/api";

export async function getStaticProps() {
  const allPageData = await getSortedPageData();
  // const global = await fetchAPI("/global");

  return {
    props: {
      allPageData,
      // global
    },
    revalidate: 1,
  };
}

const Pages = ({ allPageData, global }) => (
  <>
    <section>
      <div className="row">
        <div>All Pages</div>
        {console.log("data: ", allPageData)}
        {allPageData.map((page) => (
          <div key={page.id}>{page.shortName}</div>
        ))}
      </div>
    </section>
  </>
);

export default Pages;
