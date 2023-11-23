import PurchaseButton from "./PurchaseButton";

const CoachingCards = ({ plan, bullets, price, to }) => {
  return (
    <div>
      <h4>{plan}</h4>
      <h5>Coaching Plan</h5>
      <ul>
        {bullets?.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
      <p>
        ${price}
        <span>/{plan}</span>
      </p>
      <PurchaseButton to={to} />
    </div>
  );
};

export default CoachingCards;
