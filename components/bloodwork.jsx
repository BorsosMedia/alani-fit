import Button from "./Button";

const Bloodwork = () => {
  return (
    <article className="bg-bloodwork">
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
        <Button to="#" />
      </section>
    </article>
  );
};

export default Bloodwork;
