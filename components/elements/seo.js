import { NextSeo } from "next-seo";
import { DefaultSeo } from "next-seo";
import PropTypes from "prop-types";
import { getStrapiMedia } from "../../lib/media";
// import { mediaPropTypes } from "utils/types";

const Seo = ({ metadata, global, referer }) => {
  // Prevent errors if no metadata was set
  if (!metadata)
    return (
      <DefaultSeo
        titleTemplate={`%s | ${global.metaTitleSuffix}`}
        title={referer}
        description={
          "Keep up with the latest news from San Pedro Presbyterian Church in San Antonio, Texas"
        }
        openGraph={
          global.metadata &&
          global.metadata.shareImage &&
          global.metadata.shareImage.formats
            ? {
                images: Object.values(global.metadata.shareImage.formats).map(
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
        twitter={
          global.metadata && global.metadata.twitter
            ? {
                cardType: global.metadata.twitterCardType,
                handle: global.metadata.twitterUsername,
              }
            : null
        }
      />
    );

  return (
    <NextSeo
      title={metadata.metaTitle}
      description={metadata.metaDescription}
      openGraph={{
        // Title and description are mandatory
        title: metadata.metaTitle,
        description: metadata.metaDescription,
        // Only include OG image if we have it
        // Careful: if you disable image optimization in Strapi, this will break
        ...(metadata.shareImage && {
          images: Object.values(metadata.shareImage.formats).map((image) => {
            return {
              url: getStrapiMedia(image.url),
              width: image.width,
              height: image.height,
            };
          }),
        }),
      }}
      // Only included Twitter data if we have it
      twitter={{
        ...(metadata.twitterCardType && { cardType: metadata.twitterCardType }),
        ...(metadata.twitterUsername && { cardType: metadata.twitterUsername }),
      }}
    />
  );
};

// Seo.propTypes = {
//   metadata: PropTypes.shape({
//     metaTitle: PropTypes.string.isRequired,
//     metaDescription: PropTypes.string.isRequired,
//     shareImage: mediaPropTypes,
//     twitterCardType: PropTypes.string,
//     twitterUsername: PropTypes.string,
//   }),
// };

export default Seo;
