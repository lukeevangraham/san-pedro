import { MdCheckBox } from "react-icons/md";
import classNames from "classnames";

import classes from "./Pricing.module.css";

const Pricing = ({ data }) => {
  return (
    <section>
      <h2>{data.title}</h2>
      <div className="row">
        {data.plans.map((plan, index, array) => (
          <div className={`col span-1-of-${array.length}`} key={plan.id}>
            <div className={classes.planBox}>
              <h3>{plan.name}</h3>
              <p
                className={classNames("mt-4 text-lg", {
                  "text-primary-700": plan.isRecommended,
                  "text-gray-700": !plan.isRecommended,
                })}
              >
                {plan.description}
              </p>
              <p className={classes.price}>
                {plan.price === 0 ? "Free " : `$${plan.price} `}
                <span className="text-base font-medium">
                  {plan.pricePeriod}
                </span>
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    className={classes.listItem}
                    key={feature.id}
                  >
                    <MdCheckBox className="h-6 w-auto text-gray-900" />
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
