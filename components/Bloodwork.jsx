import Button from "./Button";

const Bloodwork = () => {
  return (
    <article className="bg-bloodwork">
      <section className="py-8 text-center text-light-blue md:text-left">
        <h2 className="dragna text-3xl sm:text-5xl 2xl:text-7xl">
          Understanding How
          <br />
          <span className="text-dark-pink">Your Body Works</span>
        </h2>
        <p className="py-8 xl:text-xl 2xl:text-2xl">
          In fitness, we need to go beyond the surface and blood work analysis
          is the gateway to a deeper understanding of your body composition. It
          will allow me to customize your fitness and diet on the fly for
          improved results.
        </p>
        <p className="amenti-bold pb-8 text-7xl">$199</p>
        <Button to="https://training.alanixfitcoaching.com/bloodwork-pay" />
      </section>
    </article>
  );
};

export default Bloodwork;
