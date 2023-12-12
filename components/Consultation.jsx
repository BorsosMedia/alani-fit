import Button from "./Button";

const Consultation = () => {
  return (
    <article className="flex-col-center w-full gap-2 bg-light-blue px-[10vw] py-4 text-center md:py-8 ">
      <h2 className="dragna text-3xl text-dark-pink md:text-4xl lg:text-5xl 2xl:text-7xl">
        Get a Free 15 Minute Consultation Call
      </h2>
      <p className="text-lg text-white md:text-xl 2xl:text-2xl">
        I&apos;m here to help you understand the process. Book a 15 minute
        consultation for free and let&apos;s talk about it.
      </p>
      <a href="#" className="pt-2 md:pt-4">
        <Button
          text="Go to calendar"
          to="https://training.alanixfitcoaching.com/calendar-sales"
          color="bg-white text-dark-pink"
        />
      </a>
    </article>
  );
};

export default Consultation;
