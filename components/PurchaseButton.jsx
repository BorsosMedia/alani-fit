import Link from "next/link";

const PurchaseButton = ({ to, color = "text-white" }) => {
  return (
    <Link href={to}>
      <button className="blue-rectangle clickable text-2xl tracking-widest">
        <span className={`unskew uppercase ${color}`}>Purchase</span>
      </button>
    </Link>
  );
};

export default PurchaseButton;
