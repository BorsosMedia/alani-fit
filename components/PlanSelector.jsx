"use client";

import { useState } from "react";

import CoachingCards from "./CoachingCards";

const PlanSelector = () => {
  const [plan, setPlan] = useState("monthly");

  const handleChange = (e) => {
    setPlan(e.target.htmlFor);
  };

  return (
    <section>
      <fieldset>
        <label htmlFor="monthly" onClick={handleChange}>
          Monthly
          <input
            type="radio"
            value="monthly"
            id="monthly"
            name="plans"
            className="hidden"
          />
        </label>
        <label htmlFor="3-months" onClick={handleChange}>
          3 Months
          <input
            type="radio"
            value="3-months"
            id="3-months"
            name="plans"
            className="hidden"
          />
        </label>
        <label htmlFor="6-months" onClick={handleChange}>
          6 Months
          <input
            type="radio"
            value="6-months"
            id="6-months"
            name="plans"
            className="hidden"
          />
        </label>
        <label htmlFor="annual" onClick={handleChange}>
          Annual
          <input
            type="radio"
            value="annual"
            id="annual"
            name="plans"
            className="hidden"
          />
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
