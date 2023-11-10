import {
  getAllPageSlugs,
  getPageData,
  fetchAPI,
  siteAddress,
} from "../../lib/api";
import Sections from "../../components/sections/sections";
import Layout from "../../hoc/Layout/Layout";
import { DefaultSeo } from "next-seo";
import { getStrapiMedia } from "../../lib/media";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const paths = await getAllPageSlugs();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const pageData = await getPageData(params.slug);
  const global = await fetchAPI("/global");
  return {
    props: {
      pageData,
      global,
    },
    revalidate: 1,
  };
}

export default function Page({ pageData, global }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Making sure we don't render the hero (first section)
  let renderSections = pageData.contentSections ? (
    <Sections sections={pageData.contentSections} preview={null} />
  ) : (
    <div>Loading...</div>
  );

  return (
    <Layout global={global}>
      <DefaultSeo
        // titleTemplate={`%s | ${global.metaTitleSuffix}`}
        title={`${pageData.metadata.metaTitle} | ${global.metaTitleSuffix}`}
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
        canonical={`${siteAddress}/pages/${pageData.slug}`}
      />
      <section style={{ paddingBottom: 0 }}>
        {pageData.metadata.metaTitle ? (
          <h1 style={{ display: "none" }}>{pageData.metadata.metaTitle}</h1>
        ) : null}

        <h2>{pageData.shortName}</h2>
      </section>
      {renderSections}
    </Layout>
  );
}
