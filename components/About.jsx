/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import Image from "next/image";

import alani1 from "../public/assets/about-1.png";
import alani2 from "../public/assets/about-2.png";
import alani3 from "../public/assets/about-3.png";
import flag from "../public/assets/flag.png";
import heart from "../public/assets/heart.png";
import runner from "../public/assets/runner.png";

const About = () => {
  return (
    <article id="about">
      <section className="flex items-end justify-between md:flex-row-reverse">
        <Image src={alani2} alt="Alani" className="bg-about md:-left-10" />
        <Image src={alani1} alt="Alani" className="bg-about md:-left-32" />
        <section className="absolute h-fit w-full place-self-center py-16 text-center text-white">
          <h2 className="dragna pb-4 text-5xl 2xl:text-7xl">
            About me <span className="text-dark-pink">Alani Long</span>
          </h2>
          <section className="flex-row-center">
            <Image
              src={alani3}
              alt="Alani"
              className="hidden h-[480px] w-auto md:block 2xl:h-[620px]"
            />
            <div className="relative -left-16 h-[450px] w-[320px] rounded-3xl bg-blue-gradient text-light-blue sm:w-[441px] xl:-left-20 2xl:h-[592px] 2xl:w-[581px]">
              <div className="absolute m-[5%] flex h-[90%] w-[90%] flex-col items-center justify-between text-lg md:text-xl 2xl:m-[10%] 2xl:h-[80%] 2xl:w-[80%] 2xl:text-2xl">
                <h3 className="amenti-bold pb-4 text-2xl uppercase 2xl:text-5xl">
                  Your Fitness Partner
                </h3>
                <p className="pb-4">
                  My name is Alani Long. I&apos;m a 21-year-old fitness
                  enthusiast and bikini competitor. I was introduced to
                  bodybuilding at 16, driven by nothing but curiosity and a
                  desire to challenge myself.
                </p>
                <p>
                  Five years later, my commitment is backed with relevant
                  certifications and real-life experiences to help you tackle
                  the hurdles you might face. I&apos;ll provide the support you
                  need, turning your goals into reality in a way that feels
                  personal and, most importantly, enjoyable.
                </p>
              </div>
            </div>
          </section>
          <section className="amenti-bold mx-[20%] flex w-[60%] -skew-x-[20deg] flex-row items-center justify-around bg-dark-pink px-4 py-2 text-lg uppercase md:text-xl 2xl:text-2xl">
            <div className="flex-row-center skew-x-[20deg]">
              <Image src={runner} alt="Runner" className="about-icons" />
              <span>Personalized Training</span>
            </div>
            <div className="flex-row-center skew-x-[20deg]">
              <Image src={flag} alt="Flag" className="about-icons" />
              <span>Smart Nutrition</span>
            </div>
            <div className="flex-row-center skew-x-[20deg]">
              <Image src={heart} alt="Heart" className="about-icons" />
              <span>Positive Mindset</span>
            </div>
          </section>
        </section>
      </section>
      <div className="about-separator" />
    </article>
  );
};

export default About;
