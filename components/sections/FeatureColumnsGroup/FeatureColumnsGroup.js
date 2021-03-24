// import Image from "../../elements/image";
import Image from "next/image";
import Zoom from "react-reveal/Zoom";

const FeatureColumnsGroup = ({ data }) => {
  return (
    <section>
      {data.title ? <h2>{data.title}</h2> : null}
      {data.topDescription ? (
        <div className="row">
          <div className="col span-1-of-6" />
          <div
            className="col span-4-of-6"
            style={{
              margin: "auto",
              textAlign: "center",
              marginBottom: "1.75rem",
              fontWeight: "200",
            }}
          >
            <p>{data.topDescription}</p>
          </div>
        </div>
      ) : null}
      <div className="row">
        {/* <div className="container flex flex-col lg:flex-row lg:flex-wrap gap-12 align-top py-12"> */}
        <Zoom cascade>
          {data.features.map((feature, index, array) => (
            <div
              className={`col span-1-of-${array.length}`}
              key={feature.id}
              style={{ padding: "1%" }}
            >
              <div
                style={{
                  width: "53px",
                  height: "70px",
                  position: "relative",
                  marginBottom: "15px",
                }}
              >
                <Image
                  src={feature.icon.url}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="font-bold mt-4 mb-4">{feature.title}</h3>
              <p
                style={{
                  lineHeight: "1.5",
                  fontSize: "90%",
                  fontWeight: "200",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
          {/* </div> */}
        </Zoom>
      </div>
    </section>
  );
};

export default FeatureColumnsGroup;
