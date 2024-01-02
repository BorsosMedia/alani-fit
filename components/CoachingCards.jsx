import Button from "./Button";

const CoachingCards = ({
  tier,
  plan,
  price,
  decimal,
  to,
  discount,
  before,
}) => {
  return (
    <div
      className={`bg-coaching-card ${
        tier === "bottom" ? "bg-blue-gradient" : "bg-pink-gradient"
      }`}
    >
      <div
        className={`coaching-card text-center ${
          tier === "bottom" ? "text-light-blue" : "text-white"
        }`}
      >
        <div>
          <h4 className="card-headline">{tier} Tier</h4>
          <h5 className="card-subheadline">Coaching Plan</h5>
        </div>
        <ul className="card-bullets">
          {tier === "bottom" ? (
            <>
              <li>Access to Training App</li>
              <li>Personalized Training</li>
              <li>Nutrition Plans</li>
              <li>Bi-weekly Check-Ins</li>
            </>
          ) : (
            <>
              <li>Access to Training App</li>
              <li>FaceTime Consultation</li>
              <li>Personalized Training</li>
              <li>Nutrition Plans</li>
              <li>Weekly Check-Ins</li>
            </>
          )}
        </ul>
        <p
          className={`card-price ${
            plan === "monthly" ? "items-baseline" : "items-end"
          }`}
        >
          <span>
            ${price}
            {decimal && <span className="text-[0.6em]">.{decimal}</span>}
          </span>
          {plan !== "monthly" ? (
            <span className="relative bottom-1 flex flex-col items-start text-[0.3em] uppercase md:bottom-2 2xl:bottom-3">
              <div
                className={`skew mx-3 mb-1 py-2 ${
                  tier === "bottom"
                    ? "bg-dark-pink text-white"
                    : "bg-light-blue text-light-pink"
                }`}
              >
                <div className="flex-col-center px-2">
                  <p className="dragna unskew">{discount}% off</p>
                  <p className="unskew text-[0.5em] uppercase line-through">
                    Before ${before}
                  </p>
                </div>
              </div>
              <div>
                /
                {plan === "monthly"
                  ? "month"
                  : plan === "annual"
                    ? "year"
                    : plan}
              </div>
            </span>
          ) : (
            <span className="text-[0.3em] uppercase">
              /
              {plan === "monthly" ? "month" : plan === "annual" ? "year" : plan}
            </span>
          )}
        </p>
        <Button
          to={to}
          color={
            tier === "bottom"
              ? "text-white bg-light-blue"
              : "text-light-blue bg-white"
          }
        />
      </div>
    </div>
  );
};

export default CoachingCards;
