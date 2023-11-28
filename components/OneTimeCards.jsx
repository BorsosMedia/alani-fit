import PurchaseButton from "./PurchaseButton";

const OneTimeCards = ({ plan, duration, bullets, price, to }) => {
  return (
    <div className="mx-[10%] grid w-[80%] grid-cols-3 place-items-center border-3 border-white bg-lighter-pink py-4 text-center text-dark-pink">
      <div>
        <h4 className="dragna text-4xl">{plan}</h4>
        <h5 className="amenti-bold text-2xl uppercase tracking-widest">
          {duration} Plan
        </h5>
      </div>
      <ul className="flex-col-center list-disc text-light-blue">
        {bullets?.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
      <div className="flex-col-center gap-4">
        <p className="amenti-bold text-5xl">${price}</p>
        <PurchaseButton to={to} />
      </div>
    </div>
  );
};

export default OneTimeCards;
