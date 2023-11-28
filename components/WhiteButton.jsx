const WhiteButton = ({ text }) => {
  return (
    <button className="skew clickable bg-white">
      <span className="unskew amenti-black px-8 py-1 text-xl uppercase text-dark-pink">
        {text}
      </span>
    </button>
  );
};

export default WhiteButton;
