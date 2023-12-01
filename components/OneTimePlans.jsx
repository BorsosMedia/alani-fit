import OneTimeCards from "./OneTimeCards";

const OneTimePlans = () => {
  return (
    <article id="one-time" className="plan-display">
      <h2 className="plan-type-headline blue-bg_pink-text">
        <span className="unskew">One Time Plans</span>
      </h2>
      <section className="cards-display-col">
        <OneTimeCards
          to="#"
          plan="Fit & Lean"
          bullets={[
            "Personalized Nutrition",
            "Strength Training",
            "Supplementation Advice",
            "Progress Tracking",
          ]}
        />
        <OneTimeCards
          to="#"
          plan="Weight Loss"
          bullets={[
            "Customized Meal Plan",
            "Targeted Workouts",
            "Daily Habit Transformation",
            "Progress Monitoring",
          ]}
        />
        <OneTimeCards
          to="#"
          plan="Body Revive"
          bullets={[
            "Strength and Cardio Training",
            "Nutrition Strategies",
            "Lifestyle Optimization",
            "Metabolic Conditioning",
          ]}
        />
      </section>
    </article>
  );
};

export default OneTimePlans;
