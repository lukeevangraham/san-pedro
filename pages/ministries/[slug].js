import Markdown from "react-markdown/with-html";
import Seo from "../../components/elements/seo";
import Image from "next/image";
import { getStrapiMedia } from "../../lib/media";
import { getAllMinistriesSlugs, getMinistryData } from "../../lib/api";

export async function getStaticPaths() {
  const paths = await getAllMinistriesSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const ministryData = await getMinistryData(params.slug);
  return {
    props: {
      ministryData,
    },
    revalidate: 1,
  };
}

export default function Ministry({ ministryData }) {
  return (
    <>
      <Seo metadata={ministryData.metadata} />
      <section>
        <div className="row">{ministryData.ministryName}</div>
      </section>
    </>
  );
}
