import Image from "next/image";

import Button from "./Button";

const Glutes = () => {
  return (
    <article>
      <section>
        <div />
        <h2>Booty Builder Glute Guide</h2>
        <div />
      </section>
      <div />
      <section>
        <section>
          <Image src="" alt="Guide Cover" />
          <div>
            <h2>Booty Builder Glute Guide</h2>
            <div>
              <p>$35</p>
              <p>Your ticket to a curvier, stronger figure.</p>
            </div>
            <Button to="#" color="text-dark-pink bg-white" />
          </div>
        </section>
        <section>
          <div>
            <Image src="" alt="" />
            <span>Sculpt</span>
          </div>
          <div>
            <Image src="" alt="" />
            <span>Tone</span>
          </div>
          <div>
            <Image src="" alt="" />
            <span>Transform</span>
          </div>
        </section>
      </section>
      <div />
    </article>
  );
};

export default Glutes;
