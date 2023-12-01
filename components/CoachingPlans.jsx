import PlanSelector from "./PlanSelector";

const CoachingPlans = () => {
  return (
    <article id="coaching" className="plan-display">
      <h2 className="plan-type-headline pink-bg_white-text">
        <span className="unskew">Coaching Plans</span>
      </h2>
      <h3 className="plan-type-subheadline">
        I&apos;m here to inspire your fitness journey.
        <br />
        Choose the plan that adapts to your goals.
      </h3>
      <PlanSelector />
    </article>
  );
};

export default CoachingPlans;
