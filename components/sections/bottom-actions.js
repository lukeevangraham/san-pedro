import ButtonLink from "../elements/button-link";
// import { getButtonAppearance } from "utils/button";

const BottomActions = ({ data }) => {
  return (
    <section className="bg-primary-800 py-20 text-center">
      <h2 className="title text-white mb-10">{data.title}</h2>
      {/* Buttons row */}
      <div className="container flex flex-row justify-center flex-wrap gap-4">
        {/* THE LINE BELOW WAS A PROP FROM THE MAP BELOW */}
            {/* appearance={getButtonAppearance(button.type, "dark")} */}
        {data.buttons.map((button) => (
          <ButtonLink
            button={button}
            key={button.id}
          />
        ))}
      </div>
    </section>
  );
};

export default BottomActions;
