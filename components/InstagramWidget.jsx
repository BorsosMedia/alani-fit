import { Suspense } from "react";

/* eslint-disable tailwindcss/no-custom-classname */
const InstagramWidget = () => {
  return (
    <article className="container mx-auto w-[80vw] py-[5vh] lg:w-[60vw]">
      <Suspense>
        <div
          className="elfsight-app-d7adc22f-21c7-4d9c-8e44-5f2b64256b27"
          data-elfsight-app-lazy
        />
      </Suspense>
    </article>
  );
};

export default InstagramWidget;
