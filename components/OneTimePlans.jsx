import OneTimeCards from "./OneTimeCards";
import OneTimeCardsSlider from "./OneTimeCardsSlider";

const OneTimePlans = () => {
  return (
    <article id="one-time" className="plan-display">
      <h2 className="plan-type-headline blue-bg_pink-text">
        <span className="unskew">One Time Plans</span>
      </h2>
      <section className="cards-display-col hidden md:flex">
        <OneTimeCards
          to="https://training.alanixfitcoaching.com/otc-fal"
          plan="Fit & Lean"
          bullets={[
            "Personalized Nutrition",
            "Strength Training",
            "Supplementation Advice",
            "Progress Tracking",
          ]}
        />
        <OneTimeCards
          to="https://training.alanixfitcoaching.com/otc-wl"
          plan="Weight Loss"
          bullets={[
            "Customized Meal Plan",
            "Targeted Workouts",
            "Daily Habit Transformation",
            "Progress Monitoring",
          ]}
        />
        <OneTimeCards
          to="https://training.alanixfitcoaching.com/otc-br"
          plan="Body Revive"
          bullets={[
            "Strength and Cardio Training",
            "Nutrition Strategies",
            "Lifestyle Optimization",
            "Metabolic Conditioning",
          ]}
        />
      </section>
      <section className="w-[80%] py-8 md:hidden">
        <OneTimeCardsSlider />
      </section>
    </article>
  );
};

export default OneTimePlans;
