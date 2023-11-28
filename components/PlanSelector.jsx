"use client";

import { useState } from "react";

import CoachingCards from "./CoachingCards";

const PlanSelector = () => {
  const [plan, setPlan] = useState("monthly");

  const handleChange = (e) => {
    setPlan(e.target.htmlFor);
  };

  return (
    <section className="flex-col-center mx-[10%] w-[80%]">
      <fieldset className="flex-row-center gap-8 pb-8">
        <input
          type="radio"
          value="monthly"
          id="monthly"
          name="plans"
          className="hidden"
        />
        <label
          htmlFor="monthly"
          onClick={handleChange}
          className={`plan ${
            plan === "monthly" ? "selected-plan" : "unselected-plan"
          }`}
        >
          Monthly
        </label>
        <input
          type="radio"
          value="3-months"
          id="3-months"
          name="plans"
          className="hidden"
        />
        <label
          htmlFor="3-months"
          onClick={handleChange}
          className={`plan ${
            plan === "3-months" ? "selected-plan" : "unselected-plan"
          }`}
        >
          3 Months
        </label>
        <input
          type="radio"
          value="6-months"
          id="6-months"
          name="plans"
          className="hidden"
        />
        <label
          htmlFor="6-months"
          onClick={handleChange}
          className={`plan ${
            plan === "6-months" ? "selected-plan" : "unselected-plan"
          }`}
        >
          6 Months
        </label>
        <input
          type="radio"
          value="annual"
          id="annual"
          name="plans"
          className="hidden"
        />
        <label
          htmlFor="annual"
          onClick={handleChange}
          className={`plan ${
            plan === "annual" ? "selected-plan" : "unselected-plan"
          }`}
        >
          Annual
        </label>
      </fieldset>
      {plan === "monthly" ? (
        <CoachingCards
          plan="monthly"
          bullets={[
            "SMS & Email Check-Ins",
            "Personalized Training",
            "Nutrition and Rehab",
            "Lifestyle Advice",
            "Includes Initial Consultation",
          ]}
          price="249"
          to="#"
        />
      ) : plan === "3-months" ? (
        <CoachingCards
          plan="3 months"
          bullets={[
            "SMS & Email Check-Ins",
            "Personalized Training",
            "Nutrition and Rehab",
            "Lifestyle Advice",
            "Includes Initial Consultation",
          ]}
          price="249"
          to="#"
        />
      ) : plan === "6-months" ? (
        <CoachingCards
          plan="6 months"
          bullets={[
            "SMS & Email Check-Ins",
            "Personalized Training",
            "Nutrition and Rehab",
            "Lifestyle Advice",
            "Includes Initial Consultation",
          ]}
          price="249"
          to="#"
        />
      ) : (
        <CoachingCards
          plan="annual"
          bullets={[
            "SMS & Email Check-Ins",
            "Personalized Training",
            "Nutrition and Rehab",
            "Lifestyle Advice",
            "Includes Initial Consultation",
          ]}
          price="249"
          to="#"
        />
      )}
    </section>
  );
};

export default PlanSelector;
