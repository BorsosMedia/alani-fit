import Image from "next/image";

import alani from "../public/assets/inquiry.png";

const InquirySection = () => {
  return (
    <article className="grid grid-cols-1 place-content-center bg-inquiry-bg-mobile bg-cover bg-no-repeat md:bg-inquiry-bg-desktop 2xl:h-0 2xl:py-[28.30769230769231%]">
      <div className="mx-[10%] grid w-[80%] grid-cols-1 py-8 text-center text-white md:grid-cols-5">
        <Image
          src={alani}
          alt="Alani"
          className="col-span-2 hidden place-self-center p-4 md:block"
        />
        <section className="col-span-3 place-self-center">
          <h2 className="dragna mb-4 text-5xl">
            Unlock your
            <br />
            full potential
          </h2>
          <p>
            There&apos;s power in knowledge. Ask away and I&apos;ll do my best
            to answer your questions.
          </p>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/CL1GoqDv45XzH1H4p89J"
            id="inline-CL1GoqDv45XzH1H4p89J"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Inquiry Form"
            data-height="593"
            data-layout-iframe-id="inline-CL1GoqDv45XzH1H4p89J"
            data-form-id="CL1GoqDv45XzH1H4p89J"
            title="Inquiry Form"
            height="fit-content"
            width="100%"
          />
        </section>
      </div>
    </article>
  );
};

export default InquirySection;
