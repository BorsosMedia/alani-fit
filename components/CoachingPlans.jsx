import PlanSelector from "./PlanSelector";

const CoachingPlans = () => {
  return (
    <article id="coaching" className="py-8">
      <h2 className="dragna skew mx-[10%] w-[80%] bg-dark-pink py-2 text-center text-5xl uppercase text-white">
        <span className="unskew">Coaching Plans</span>
      </h2>
      <h3 className="amenti-medium mx-[10%] mb-8 mt-4 w-[80%] text-center text-2xl uppercase text-lighter-pink">
        Choose the plan that fits you best
      </h3>
      <PlanSelector />
    </article>
  );
};

export default CoachingPlans;
