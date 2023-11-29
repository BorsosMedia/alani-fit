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
    <article className="w-full pt-8" id="about">
      <section className="grid grid-cols-2 place-content-end">
        <Image
          src={alani1}
          alt="Alani"
          className="relative -left-20 h-full w-auto place-self-start"
        />
        <Image
          src={alani2}
          alt="Alani"
          className="relative -left-20 h-full w-auto place-self-end"
        />
      </section>

      <section className="place-self-center py-16 text-center text-white">
        <h2 className="dragna pb-4 text-5xl">
          About me <span className="text-dark-pink">Alani Long</span>
        </h2>
        <section className="flex-row-center">
          <Image src={alani3} alt="Alani" className="h-auto w-80" />
          <div className="relative -left-16 h-[420px] w-[320px] rounded-3xl bg-radial-gradient-blue text-light-blue">
            <div className="absolute m-[5%] flex h-[90%] w-[90%] flex-col items-center justify-between py-[5%]">
              <h3 className="amenti-bold pb-4 text-3xl uppercase">
                Lorem ipsum dolor sit amet
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui.
              </p>
            </div>
          </div>
        </section>
        <section className="amenti-bold mx-[20%] flex w-[60%] max-w-[1080px] -skew-x-[20deg] flex-row items-center justify-around bg-dark-pink px-4 py-2 uppercase">
          <div className="flex-row-center skew-x-[20deg]">
            <Image src={runner} alt="Runner" className="about-icons" />
            <span>Constancy</span>
          </div>
          <div className="flex-row-center skew-x-[20deg]">
            <Image src={flag} alt="Flag" className="about-icons" />
            <span>Resolution</span>
          </div>
          <div className="flex-row-center skew-x-[20deg]">
            <Image src={heart} alt="Heart" className="about-icons" />
            <span>Healthy Lifestyle</span>
          </div>
        </section>
      </section>
    </article>
  );
};

export default About;
