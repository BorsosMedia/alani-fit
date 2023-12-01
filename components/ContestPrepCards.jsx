import Button from "./Button";

const ContestPrepCards = ({ plan, price, to }) => {
  return (
    <div className="bg-contest-prep-card">
      <div className="gradient-border">
        <div
          className={`contest-prep-card ${
            plan === "monthly" ? "bg-lighter-pink" : "bg-white"
          }`}
        >
          <div>
            <h4 className="card-headline">{plan}</h4>
            <h5 className="card-subheadline">Contest Prep</h5>
          </div>
          <ul className="card-bullets text-light-blue">
            {plan === "monthly" ? (
              <>
                <li>Email Contact</li>
                <li>Personalized Training</li>
                <li>Nutrition Plans</li>
                <li>Bi-weekly Check-Ins</li>
                <li>Posing Sessions</li>
              </>
            ) : (
              <>
                <li>SMS & Email Contact</li>
                <li>FaceTime Consultation</li>
                <li>Personalized Training</li>
                <li>Nutrition Plans</li>
                <li>Weekly Check-Ins</li>
                <li>Posing Sessions</li>
              </>
            )}
          </ul>
          <p className="card-price">${price}</p>
          <Button to={to} color="text-white bg-light-blue" />
        </div>
      </div>
    </div>
  );
};

export default ContestPrepCards;
