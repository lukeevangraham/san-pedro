import classNames from "classnames";
import "@fontsource/source-sans-pro/200.css";
import { useState } from "react";
import { getStrapiMedia } from "../../../lib/media";
// import Image from "../../elements/image";

import Image from "next/image";
import CustomLink from "../../elements/custom-link";

import classes from "./TestimonialsGroup.module.css";

const TestimonialsGroup = ({ data }) => {
  // Only show one testimonial at a time
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(0);
  const selectedTestimonial = data.testimonials[selectedTestimonialIndex];

  return (
    <section className={classes.section}>
      {/* <section className="text-center text-lg bg-gray-200 pt-12 pb-16"> */}
      <h2>{data.title}</h2>
      <div className="row">
        <div className="col span-1-of-6"></div>
        <div className="col span-4-of-6">
          <p className={classes.description}>{data.description}</p>
          <CustomLink link={data.link}>
            <span className="with-arrow text-blue-700 hover:underline">
              {data.link.text}
            </span>
          </CustomLink>
        </div>
      </div>
      <div className="row" style={{ margin: "1rem auto" }}>
        <div className="col span-1-of-12" />
        <div className="col span-10-of-12">
          {/* Current testimonial card */}
          {/* <div className="max-w-5xl w-8/12 sm:w-8/12 bg-white shadow-md sm:shadow-xl mx-auto flex flex-col sm:flex-row mt-10 text-left"> */}
          <div className={classes.testimonyWrap}>
            <div className={classes.bigImageWrap}>
              <Image
                src={getStrapiMedia(selectedTestimonial.picture.url)}
                alt={selectedTestimonial.picture.alternativeText}
                layout="fill"
                objectFit="cover"
                className="w-full md:w-4/12 object-cover flex-shrink-0"
              />
            </div>
            {/* <div className="px-4 py-4 sm:px-12 sm:pt-12 sm:pb-4 flex flex-col justify-between"> */}
            <div className={classes.testimonyNonImage}>
              <div>
                <div className={classes.testLogo}>
                  <Image
                    src={getStrapiMedia(selectedTestimonial.logo.url)}
                    alt={selectedTestimonial.logo.alternativeText}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className={classes.testimonyText}>
                  "{selectedTestimonial.text}"
                </p>
                {/* <p className="font-bold text-base sm:text-sm"> */}
                <p className={`${classes.smallText} ${classes.authorName}`}>
                  {selectedTestimonial.authorName}
                </p>
                {/* <p className="text-base sm:text-sm"> */}
                <p className={`${classes.smallText} ${classes.authorTitle}`}>
                  {selectedTestimonial.authorTitle}
                </p>
              </div>
              {/* <CustomLink
                link={{
                  url: selectedTestimonial.link,
                  text: "",
                  newTab: false,
                  id: 0,
                }}
              >
                <span className="uppercase tracking-wide text-blue-700 hover:underline  with-arrow sm:self-end mt-6 sm:mt-0">
                  Read story
                </span>
              </CustomLink> */}
            </div>
          </div>
        </div>
      </div>
      {/* Change selected testimonial (only if there is more than one) */}
      {/* <div className="flex flex-row gap-4 mt-10 justify-center"> */}
      {data.testimonials.length > 1 && (
        <div className={classes.paginationBlock}>
          {data.testimonials.map((testimonial, index) => (
            <button
              onClick={() => setSelectedTestimonialIndex(index)}
              aria-label={testimonial.authorName}
              className={classNames(
                // Common classes
                classes.paginationButton,
                {
                  [classes.unselectedTest]: index !== selectedTestimonialIndex,
                  [classes.selectedTest]: index === selectedTestimonialIndex,
                }
              )}
              key={testimonial.id}
            ></button>
          ))}
        </div>
      )}
      {/* Logos list */}
      <div className="flex flex-row flex-wrap items-center gap-6 sm:gap-20 justify-center mt-10 px-6 sm:px-0">
        {data.logos.map((logo) => (
          <div
            className={classes.testLogo}
            key={logo.id}
            style={{ margin: "auto" }}
          >
            <Image
              src={getStrapiMedia(logo.logo.url)}
              alt={logo.logo.alternativeText}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsGroup;
