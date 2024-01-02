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
          {/* <CoachingCards
            tier="bottom"
            plan="monthly"
            price="149"
            to="https://training.alanixfitcoaching.com/ftc-bt-mp"
          /> */}
          <CoachingCards
            tier="upper"
            plan="monthly"
            // price="249"
            price="174"
            decimal="3"
            // to="https://training.alanixfitcoaching.com/ftc-ut-mp"
            to="https://training.alanixfitcoaching.com/ftc-ut-mp-nys"
            discount="30"
            before="249"
          />
        </div>
      ) : plan === "3 months" ? (
        <div className="coaching-cards-display">
          {/* <CoachingCards
            tier="bottom"
            plan="3 months"
            price="402"
            decimal="3"
            to="https://training.alanixfitcoaching.com/ftc-bt-3mp"
            discount="10"
            before="447"
          /> */}
          <CoachingCards
            tier="upper"
            plan="3 months"
            // price="672"
            price="448"
            // decimal="3"
            decimal="2"
            // to="https://training.alanixfitcoaching.com/ftc-ut-3mp"
            to="https://training.alanixfitcoaching.com/ftc-ut-3mp-nys"
            // discount="10"
            discount="40"
            before="747"
          />
        </div>
      ) : plan === "6 months" ? (
        <div className="coaching-cards-display">
          {/* <CoachingCards
            tier="bottom"
            plan="6 months"
            price="715"
            decimal="2"
            to="https://training.alanixfitcoaching.com/ftc-bt-6mp"
            discount="20"
            before="894"
          /> */}
          <CoachingCards
            tier="upper"
            plan="6 months"
            // price="1195"
            price="747"
            // decimal="2"
            // to="https://training.alanixfitcoaching.com/ftc-ut-6mp"
            to="https://training.alanixfitcoaching.com/ftc-ut-6mp-nys"
            // discount="20"
            discount="50"
            before="1494"
          />
        </div>
      ) : (
        <div className="coaching-cards-display">
          {/* <CoachingCards
            tier="bottom"
            plan="annual"
            price="1251"
            decimal="6"
            to="https://training.alanixfitcoaching.com/ftc-bt-ap"
            discount="30"
            before="1788"
          /> */}
          <CoachingCards
            tier="upper"
            plan="annual"
            // price="2091"
            price="1195"
            // decimal="6"
            decimal="2"
            // to="https://training.alanixfitcoaching.com/ftc-ut-ap"
            to="https://training.alanixfitcoaching.com/ftc-ut-ap-nys"
            // discount="30"
            discount="60"
            before="2988"
          />
        </div>
      )}
    </section>
  );
};

export default PlanSelector;
