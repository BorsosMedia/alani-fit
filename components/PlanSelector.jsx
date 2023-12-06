"use client";

import { useState } from "react";

import CoachingCards from "./CoachingCards";

const PlanSelector = () => {
  const planTypes = ["monthly", "3 months", "6 months", "annual"];
  const [plan, setPlan] = useState("monthly");

  const handleChange = (e) => {
    setPlan(e.target.htmlFor);
  };

  return (
    <section className="plan-display z-10">
      <fieldset>
        {planTypes.map((planType, index) => (
          <div key={index}>
            <input
              type="radio"
              value={planType}
              id={planType}
              name="plans"
              className="hidden"
            />
            <label
              htmlFor={planType}
              onClick={handleChange}
              className={
                plan === planType ? "selected-plan" : "unselected-plan"
              }
            >
              {planType}
            </label>
          </div>
        ))}
      </fieldset>
      {plan === "monthly" ? (
        <div className="coaching-cards-display">
          <CoachingCards tier="bottom" plan="monthly" price="149" to="#" />
          <CoachingCards tier="upper" plan="monthly" price="249" to="#" />
        </div>
      ) : plan === "3 months" ? (
        <div className="coaching-cards-display">
          <CoachingCards
            tier="bottom"
            plan="3 months"
            price="402.3"
            to="#"
            discount="10"
            before="447"
          />
          <CoachingCards
            tier="upper"
            plan="3 months"
            price="672.3"
            to="#"
            discount="10"
            before="747"
          />
        </div>
      ) : plan === "6 months" ? (
        <div className="coaching-cards-display">
          <CoachingCards
            tier="bottom"
            plan="6 months"
            price="715.2"
            to="#"
            discount="20"
            before="894"
          />
          <CoachingCards
            tier="upper"
            plan="6 months"
            price="1195.2"
            to="#"
            discount="20"
            before="1494"
          />
        </div>
      ) : (
        <div className="coaching-cards-display">
          <CoachingCards
            tier="bottom"
            plan="annual"
            price="1251.6"
            to="#"
            discount="30"
            before="1788"
          />
          <CoachingCards
            tier="upper"
            plan="annual"
            price="2091.6"
            to="#"
            discount="30"
            before="2988"
          />
        </div>
      )}
    </section>
  );
};

export default PlanSelector;
