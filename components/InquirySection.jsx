import Image from "next/image";

import alani from "../public/assets/inquiry.png";

const InquirySection = () => {
  return (
    <article className="bg-inquiry-bg-desktop bg-cover bg-no-repeat">
      <div className="mx-[10%] grid w-[80%] grid-cols-1 py-8 text-center text-white md:grid-cols-2">
        <Image src={alani} alt="Alani" className="place-self-center p-4" />
        <section className="">
          <h2 className="dragna mb-4 text-5xl">
            Unlock your
            <br />
            full potential
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/CL1GoqDv45XzH1H4p89J"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "4px",
            }}
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
          />
        </section>
      </div>
    </article>
  );
};

export default InquirySection;
