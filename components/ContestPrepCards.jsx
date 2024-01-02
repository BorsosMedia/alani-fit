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
            <li>Access to Training App</li>
            <li>FaceTime Consultation</li>
            <li>Personalized Training</li>
            <li>Nutrition Plans</li>
            <li>Weekly Check-Ins</li>
            <li>Posing Sessions</li>
          </ul>
          {/* <p className="card-price">${price}</p> */}
          <div className="flex flex-row items-end gap-2">
            <p className="card-price">${price}</p>
            <div className="skew on-sale-flag mx-3 mb-1 p-2 text-white">
              <p className="dragna unskew">on sale</p>
            </div>
          </div>
          <Button to={to} color="text-white bg-light-blue" />
        </div>
      </div>
    </div>
  );
};

export default ContestPrepCards;
