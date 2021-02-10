import classNames from "classnames";
import PropTypes from "prop-types";
// import { buttonLinkPropTypes } from "utils/types";
import Link from "next/link";
import CustomLink from "../../elements/custom-link";

import classes from "./Button.module.css";

const ButtonContent = ({ button, compact }) => {
  {
    /* "block w-full lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm border-2 rounded-md", */
  }
  return (
    <div
      className={classNames(
        // Common classes
        classes.btn,
        // Full-size button
        {
          "px-8 py-4": compact === false,
        },
        // Compact button
        {
          "px-6 py-2": compact === true,
        },
        // Specific to when the button is fully dark
        {
          [classes.btnFull]: button.type === "primary",
        },
        // Specific to when the button is dark outlines
        {
          [classes.btnGhost]: button.type === "secondary",
        },
        // Specific to when the button is fully white
        {
          /* {
          "bg-white text-primary-600 border-white": appearance === "white",
        },
        // Specific to when the button is white outlines
        {
          "text-white border-white": appearance === "white-outline",
        } */
        }
      )}
    >
      {button.text}
    </div>
  );
};

const ButtonLink = ({ button, appearance, compact = false }) => {
  return (
    <CustomLink link={button} fromButton>
      <ButtonContent
        button={button}
        appearance={appearance}
        compact={compact}
      />
    </CustomLink>
  );
};

ButtonLink.propTypes = {
  // button: buttonLinkPropTypes,
  appearance: PropTypes.oneOf([
    "dark",
    "white-outline",
    "white",
    "dark-outline",
  ]),
  compact: PropTypes.bool,
};

export default ButtonLink;
