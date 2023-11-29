import OneTimeCards from "./OneTimeCards";

const OneTimePlans = () => {
  return (
    <article id="one-time" className="py-8">
      <h2 className="dragna skew mx-[10%] w-[80%] bg-light-blue py-2 text-center text-5xl text-light-pink">
        <span className="unskew">One Time Plans</span>
      </h2>
      <section className="flex-col-center gap-4 py-8">
        <OneTimeCards
          to="#"
          plan="Lorem ipsum"
          duration="3 month"
          price="499"
          bullets={[
            "Customized Nutrition",
            "Strength Training",
            "Progressive Overload",
            "Rest and Recovery",
          ]}
        />
        <OneTimeCards
          to="#"
          plan="Lorem ipsum"
          duration="3 month"
          price="499"
          bullets={[
            "Customized Nutrition",
            "Strength Training",
            "Progressive Overload",
            "Rest and Recovery",
          ]}
        />
        <OneTimeCards
          to="#"
          plan="Lorem ipsum"
          duration="3 month"
          price="499"
          bullets={[
            "Customized Nutrition",
            "Strength Training",
            "Progressive Overload",
            "Rest and Recovery",
          ]}
        />
        <OneTimeCards
          to="#"
          plan="Lorem ipsum"
          duration="6 week"
          price="499"
          bullets={[
            "Customized Nutrition",
            "Strength Training",
            "Progressive Overload",
            "Rest and Recovery",
          ]}
        />
      </section>
    </article>
  );
};

export default OneTimePlans;
