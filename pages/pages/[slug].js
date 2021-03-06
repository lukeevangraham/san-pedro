import { getAllPageSlugs, getPageData, fetchAPI } from "../../lib/api";
import Sections from "../../components/sections/sections";
import { DefaultSeo } from "next-seo";
import { getStrapiMedia } from "../../lib/media";

export async function getStaticPaths() {
  const paths = await getAllPageSlugs();
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

export default function Page({ pageData, global }) {
  // Making sure we don't render the hero (first section)
  let renderSections = pageData.contentSections ? (
    <Sections sections={pageData.contentSections} preview={null} />
  ) : (
    <div>Loading...</div>
  );

  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${global.metaTitleSuffix}`}
        title={pageData.metadata.metaTitle}
        description={pageData.metadata.metaDescription}
        openGraph={
          pageData.metadata.shareImage && pageData.metadata.shareImage.formats
            ? {
                images: Object.values(pageData.metadata.shareImage.formats).map(
                  (image) => {
                    return {
                      url: getStrapiMedia(image.url),
                      width: image.width,
                      height: image.height,
                    };
                  }
                ),
              }
            : null
        }
        twitter={{
          cardType: pageData.metadata.twitterCardType,
          handle: pageData.metadata.twitterUsername,
        }}
      />
      <section style={{ paddingBottom: 0 }}>
        <h2>{pageData.shortName}</h2>
      </section>
      {renderSections}
    </>
  );
}
