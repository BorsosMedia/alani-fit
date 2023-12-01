import Link from "next/link";

const PurchaseButton = ({ to, color = "text-white bg-light-blue" }) => {
  return (
    <Link href={to}>
      <button
        className={`skew clickable amenti-black px-7 py-2 text-xl tracking-widest 2xl:px-14 2xl:py-4 2xl:text-3xl ${color}`}
      >
        <span className="unskew uppercase">Purchase</span>
      </button>
    </Link>
  );
};

export default PurchaseButton;
