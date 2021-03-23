import Video from "../../elements/video";

import classes from "./LargeVideo.module.css"

const LargeVideo = ({ data }) => {
  return (
    <section style={{ textAlign: "center" }}>
      <h2 className="title mb-6">{data.title}</h2>
      <div className="row">
        <p className="text-lg mb-10">{data.description}</p>
        {/* Video wrapper */}
        {/* <div className="w-full lg:w-9/12 mx-auto overflow-hidden shadow-2xl"> */}
        <div className={classes.videoWrap}>
          {/* <Video
            media={data.video}
            poster={data.poster}
            className="w-full max-h-full"
          /> */}
          <div dangerouslySetInnerHTML={{ __html: data.embedCode }}></div>
        </div>
      </div>
    </section>
  );
};

export default LargeVideo;
