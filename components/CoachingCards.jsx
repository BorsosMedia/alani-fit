import PurchaseButton from "./PurchaseButton";

const CoachingCards = ({ plan, bullets, price, to }) => {
  return (
    <div className="bg-coaching-card">
      <div className="coaching-card">
        <div className="text-center">
          <h4 className="dragna text-3xl">{plan}</h4>
          <h5 className="amenti-bold text-xl uppercase tracking-widest">
            Coaching Plan
          </h5>
        </div>
        <ul className="flex list-disc flex-col items-center justify-center">
          {bullets?.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
        <p className="amenti-bold text-5xl">
          ${price}
          <span className="text-[0.3em] uppercase">
            /{plan === "monthly" ? "month" : plan === "annual" ? "year" : plan}
          </span>
        </p>
        <PurchaseButton to={to} color="text-light-pink" />
      </div>
    </div>
  );
};

export default CoachingCards;
