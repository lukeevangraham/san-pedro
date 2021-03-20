import PropTypes from "prop-types";
// import Markdown from "react-markdown";

const RichText = ({ data }) => {
  return (
    <section>
      <div className="row">
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </section>
  );
};

RichText.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
  }),
};

export default RichText;
