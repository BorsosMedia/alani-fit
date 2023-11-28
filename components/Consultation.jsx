import WhiteButton from "./WhiteButton";

const Consultation = () => {
  return (
    <article className="flex-col-center w-full gap-4 bg-light-blue px-[10vw] py-4 text-center">
      <h2 className="dragna text-3xl text-dark-pink">
        Get a Free 15 Minute Consultation Call
      </h2>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </p>
      <a href="#">
        <WhiteButton text="Go to calendar" />
      </a>
    </article>
  );
};

export default Consultation;
