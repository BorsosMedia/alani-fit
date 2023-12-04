import ContestPrepCards from "./ContestPrepCards";
import ContestPrepCardsSlider from "./ContestPrepCardsSlider";

const ContestPrepPlans = () => {
  return (
    <article id="contest-prep" className="plan-display">
      <h2 className="plan-type-headline blue-bg_pink-text">
        <span className="unskew">Contest Prep Plans</span>
      </h2>
      <section className="cards-display-row hidden md:flex">
        <ContestPrepCards to="#" plan="monthly" price="299" />
        <ContestPrepCards to="#" plan="16 week" price="900" />
      </section>
      <section className="w-[80%] py-8 md:hidden">
        <ContestPrepCardsSlider />
      </section>
    </article>
  );
};

export default ContestPrepPlans;
