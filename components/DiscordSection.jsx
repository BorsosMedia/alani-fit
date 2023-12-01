import Image from "next/image";

import Button from "./Button";
import discord from "../public/assets/discord.png";

const DiscordSection = () => {
  return (
    <article className="skew mx-[20%] w-[60%] max-w-[1024px] border-3 border-white bg-gradient-to-r from-lighter-pink to-dark-pink p-4 text-center text-light-blue lg:mx-auto lg:block">
      <section className="grid skew-x-[20deg] grid-cols-7 place-items-center gap-4">
        <Image src={discord} alt="Discord Icon" className="h-auto w-20" />
        <h2 className="dragna col-span-2 inline-block text-3xl">
          Join my discord server
        </h2>
        <section className="flex-col-center col-span-4 gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer nofollow">
            <Button text="Join Now" to="#" color="bg-white text-dark-pink" />
          </a>
        </section>
      </section>
    </article>
  );
};

export default DiscordSection;
