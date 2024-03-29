import { useRouter } from "next/router";
import Hero from "./Hero/Hero";
import Verse from "./Verse/Verse";
import LargeVideo from "./LargeVideo/LargeVideo";
import FeatureColumnsGroup from "./FeatureColumnsGroup/FeatureColumnsGroup";
import FeatureRowsGroup from "./FeatureRowsGroup/FeatureRowsGroup";
import BottomActions from "./BottomActions/BottomActions";
import TestimonialsGroup from "./TestimonialsGroup/TestimonialsGroup";
import RichText from "./Rich-Text/rich-text";
import Embed from "./Embed/Embed";
import Pricing from "./Pricing/Pricing";
import classNames from "classnames";

import classes from "./sections.module.css";

// Map Strapi sections to section components
const sectionComponents = {
  "sections.hero": Hero,
  "sections.verse": Verse,
  "sections.large-video": LargeVideo,
  "sections.feature-columns-group": FeatureColumnsGroup,
  "sections.feature-rows-group": FeatureRowsGroup,
  "sections.bottom-actions": BottomActions,
  "sections.testimonials-group": TestimonialsGroup,
  "sections.rich-text": RichText,
  "sections.pricing": Pricing,
  "sections.embed": Embed
};

// Display a section individually
const Section = ({ sectionData }) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  }

  // Display the section
  return <SectionComponent data={sectionData} />;
};

const PreviewModeBanner = () => {
  const router = useRouter();
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
    router.asPath
  )}`;

  return (
    <div className="py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide">
      <div className="container">
        Preview mode is on.{" "}
        <a
          className="underline"
          href={`/api/exit-preview?redirect=${router.asPath}`}
        >
          Turn off
        </a>
      </div>
    </div>
  );
};

// Display the list of sections
const Sections = ({ sections, preview, home }) => {
  return (
    <div className={classNames(classes.sections, { [classes.home]: home })}>
      {/* Show a banner if preview mode is on */}
      {preview && <PreviewModeBanner />}
      {/* Show the actual sections */}
      {sections.map((section) => (
        <div className={classes.section} key={`${section.__component}${section.id}`}>
          <Section
            sectionData={section}
          />
        </div>
      ))}
    </div>
  );
};

export default Sections;
