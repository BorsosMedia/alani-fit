import PurchaseButton from "./PurchaseButton";

const CoachingCards = ({ plan, bullets, price, to }) => {
  return (
    <div className="bg-coaching-card">
      <div className="coaching-card">
        <h4 className="dragna">{plan}</h4>
        <h5 className="amenti-medium uppercase">Coaching Plan</h5>
        <ul className="flex list-disc flex-col items-center justify-center">
          {bullets?.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
        <p className="font-bold">
          ${price}
          <span className="uppercase">
            /{plan === "monthly" ? "month" : plan === "annual" ? "year" : plan}
          </span>
        </p>
        <PurchaseButton to={to} color="text-light-pink" />
      </div>
    </div>
  );
};

export default CoachingCards;
