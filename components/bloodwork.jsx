import PurchaseButton from "./PurchaseButton";

const Bloodwork = () => {
  return (
    <article className="grid grid-cols-1 place-content-center bg-bloodwork-bg-desktop bg-cover bg-no-repeat px-[10vw] md:grid-cols-2 md:px-0 md:pl-[10%] xl:h-0 xl:py-[20.546875%]">
      <section className="py-8 text-center text-light-blue md:text-left">
        <h2 className="dragna text-5xl xl:text-7xl">
          Lorem ipsum
          <br />
          <span className="text-dark-pink">Lorem ipsum</span>
        </h2>
        <p className="py-8 xl:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <p className="amenti-bold pb-8 text-5xl xl:text-7xl">$199</p>
        <PurchaseButton to="#" />
      </section>
    </article>
  );
};

export default Bloodwork;
