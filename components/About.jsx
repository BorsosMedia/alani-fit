/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import Image from "next/image";

import alaniMobile1 from "../public/assets/about-1-mobile.png";
import alani1 from "../public/assets/about-1.png";
import alaniMobile2 from "../public/assets/about-2-mobile.png";
import alani2 from "../public/assets/about-2.png";
import alani3 from "../public/assets/about-3.png";
import flag from "../public/assets/flag.png";
import heart from "../public/assets/heart.png";
import runner from "../public/assets/runner.png";

const About = () => {
  return (
    <article id="about" className="relative py-8 text-center">
      <section className="absolute inset-y-0 flex w-full justify-between">
        <Image src={alaniMobile1} alt="Alani" className="bg-about lg:hidden" />
        <Image
          src={alaniMobile2}
          alt="Alani"
          className="bg-about -right-10 lg:hidden"
        />
        <Image
          src={alani1}
          alt="Alani"
          className="bg-about hidden lg:-left-32 lg:block"
        />
        <Image
          src={alani2}
          alt="Alani"
          className="bg-about hidden lg:-left-10 lg:block"
        />
      </section>

      <h2 className="dragna relative z-10 pb-4 text-3xl md:text-5xl 2xl:text-7xl">
        <span className="hidden md:inline">
          About me <span className="text-dark-pink">Alani Long</span>
        </span>
        <span className="md:hidden">
          About me <br />
          <span className="text-dark-pink">Alani Long</span>
        </span>
      </h2>
      <section className="flex-row-center">
        <Image
          src={alani3}
          alt="Alani"
          className="z-10 hidden h-[480px] w-auto md:block 2xl:h-[620px]"
        />
        <div className="relative z-10 mb-4 h-[450px] w-[320px] rounded-3xl bg-blue-gradient text-light-blue sm:w-[441px] md:-left-16 md:mb-0 xl:-left-20 2xl:h-[592px] 2xl:w-[581px]">
          <div className="absolute m-[5%] flex h-[90%] w-[90%] flex-col items-center justify-evenly lg:text-lg 2xl:m-[10%] 2xl:h-[80%] 2xl:w-[80%] 2xl:text-xl">
            <h3 className="amenti-bold pb-4 text-lg uppercase lg:text-xl 2xl:text-4xl">
              Your Fitness Partner
            </h3>
            <p className="pb-4">
              My name is Alani Long. I&apos;m a 21-year-old fitness enthusiast
              and bikini competitor. I was introduced to bodybuilding at 16,
              driven by nothing but curiosity and a desire to challenge myself.
            </p>
            <p>
              Five years later, my commitment is backed with relevant
              certifications and real-life experiences to help you tackle the
              hurdles you might face. I&apos;ll provide the support you need,
              turning your goals into reality in a way that feels personal and,
              most importantly, enjoyable.
            </p>
          </div>
        </div>
      </section>

      <section className="amenti-bold z-10 mx-[10%] hidden w-[80%] -skew-x-[20deg] flex-row items-center justify-around bg-dark-pink px-4 py-2 text-sm uppercase sm:flex md:text-base xl:text-xl 2xl:text-2xl">
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

      <div className="about-separator" />
    </article>
  );
};

export default About;
