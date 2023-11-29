import ProgressSlider from "./ProgressSlider";

const Progress = () => {
  return (
    <article className="mb-16" id="progress">
      <h2 className="dragna mb-8 w-full bg-white py-2 text-center text-3xl text-light-blue">
        My clients and <span className="text-dark-pink">their progress</span>
      </h2>
      <ProgressSlider />
    </article>
  );
};

export default Progress;
