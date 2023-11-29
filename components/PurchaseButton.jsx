import Link from "next/link";

const PurchaseButton = ({ to, color = "text-white" }) => {
  return (
    <Link href={to}>
      <button className="blue-rectangle clickable amenti-black px-16 py-2 text-2xl tracking-widest xl:text-3xl">
        <span className={`unskew uppercase ${color}`}>Purchase</span>
      </button>
    </Link>
  );
};

export default PurchaseButton;
