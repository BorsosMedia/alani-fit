import Button from "./Button";

const CoachingCards = ({ tier, plan, price, to, discount }) => {
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
              <li>Email Contact</li>
              <li>Personalized Training</li>
              <li>Nutrition Plans</li>
              <li>Bi-weekly Check-Ins</li>
            </>
          ) : (
            <>
              <li>SMS & Email Contact</li>
              <li>FaceTime Consultation</li>
              <li>Personalized Training</li>
              <li>Nutrition Plans</li>
              <li>Weekly Check-Ins</li>
            </>
          )}
        </ul>
        <p className="card-price">
          ${price}
          <span className="text-[0.3em] uppercase">
            /{plan === "monthly" ? "month" : plan === "annual" ? "year" : plan}
          </span>
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
