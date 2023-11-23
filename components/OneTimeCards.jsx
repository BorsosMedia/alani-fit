import PurchaseButton from "./PurchaseButton";

const OneTimeCards = ({ plan, duration, bullets, price, to }) => {
  return (
    <div>
      <div>
        <h4>{plan}</h4>
        <h5>{duration} Plan</h5>
      </div>
      <ul>
        {bullets?.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
      <div>
        <p>{price}</p>
        <PurchaseButton to={to} />
      </div>
    </div>
  );
};

export default OneTimeCards;
