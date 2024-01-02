import Button from "./Button";

const OneTimeCards = ({ plan, bullets, to }) => {
  return (
    <div className="bg-one-time-card">
      <div className="gradient-border">
        <div className="one-time-card">
          <div>
            <h4 className="card-headline">{plan}</h4>
            <h5 className="card-subheadline">3 Month Plan</h5>
          </div>
          <ul className="card-bullets text-light-blue">
            <li>Access to Training App</li>
            {bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
          <div>
            <p className="card-price pb-8 md:pb-4">$399</p>
            <Button to={to} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneTimeCards;
