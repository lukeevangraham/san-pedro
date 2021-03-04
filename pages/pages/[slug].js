import { getAllPageSlugs, getPageData, fetchAPI } from "../../lib/api";
import Sections from "../../components/sections/sections"

export async function getStaticPaths() {
  const paths = await getAllPageSlugs();
  console.log("paths: ", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pageData = await getPageData(params.slug);
  // const global = await fetchAPI("/global");
  return {
    props: {
      pageData,
      // global
    },
    revalidate: 1,
  };
}

export default function Page({ pageData }) {

    // Making sure we don't render the hero (first section)
  let renderSections = pageData.contentSections ? (
    <Sections
      sections={pageData.contentSections}
      preview={null}
    />
  ) : (
    <div>Loading...</div>
  );


  return (
    <>
    {console.log("DATA: ", pageData)}
      <section>
        <div className="row">{pageData.shortName}</div>
      </section>
      {renderSections}
    </>
  );
}
