import Image from "next/image";

import PlanSelector from "./PlanSelector";
import coachingBg from "../public/assets/coaching-bg.png";
import dumbbell2 from "../public/assets/dumbbell-2.png";
import dumbbell1 from "../public/assets/dumbbell.png";

const CoachingPlans = () => {
  return (
    <article id="coaching" className="plan-display relative pt-8">
      <section className="absolute top-0 flex h-[50vh] w-[100vw] flex-col justify-between sm:h-[75vh] md:h-[100%]">
        <div className="flex justify-between">
          <Image
            src={coachingBg}
            alt="background"
            className="absolute -left-10 h-[30vw] w-auto sm:top-[-5vh]"
          />
          <Image
            src={coachingBg}
            alt="background"
            className="absolute -right-20 h-[30vw] w-auto sm:top-[-5vh]"
          />
        </div>
        <div className="flex justify-between">
          <Image
            src={dumbbell1}
            alt="dumbbell"
            className="absolute bottom-0 left-[-10%] h-[30vw] w-auto"
          />
          <Image
            src={dumbbell2}
            alt="dumbbell"
            className="absolute bottom-0 right-[-10%] h-[30vw] w-auto"
          />
        </div>
      </section>
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
