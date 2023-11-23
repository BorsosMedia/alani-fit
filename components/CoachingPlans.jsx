import PlanSelector from "./PlanSelector";

const CoachingPlans = () => {
  return (
    <article id="coaching">
      <h2 className="pink-rectangle">
        <span className="unskew uppercase">Coaching Plans</span>
      </h2>
      <h3 className="uppercase">Choose the plan that fits you best</h3>
      <PlanSelector />
    </article>
  );
};

export default CoachingPlans;
