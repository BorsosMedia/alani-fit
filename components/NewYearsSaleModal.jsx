"use client";

import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";

import alani from "../public/assets/inquiry.png";

const NewYearsSaleModal = () => {
  const { onOpenChange } = useDisclosure();

  return (
    <Modal
      hideCloseButton={true}
      isDismissable={true}
      onOpenChange={onOpenChange}
      defaultOpen={true}
      className="h-[75%] min-w-fit bg-transparent shadow-none"
    >
      <ModalContent className="pyro">
        {() => (
          <>
            <div className="before" />
            <div className="after" />

            <ModalBody className="flex -translate-x-10 flex-row items-center justify-center gap-4 sm:-translate-x-24 xl:-translate-x-32">
              <section>
                <Image
                  src={alani}
                  alt="Alani"
                  className="h-48 w-auto translate-x-14 sm:h-80 sm:translate-x-24 xl:h-[28rem] xl:translate-x-32 2xl:h-[32rem]"
                />
              </section>
              <section className="on-sale-flag flex flex-col justify-around gap-5 rounded-lg pb-8 pl-10 pr-5 pt-4 sm:pb-16 sm:pl-20 sm:pt-8 xl:pb-20 xl:pl-24 xl:pr-10 xl:pt-16 2xl:gap-10 2xl:pb-24 2xl:pl-28 2xl:pr-14 2xl:pt-20">
                <h2 className="dragna flex flex-col gap-1 text-center text-xl text-lighter-pink sm:text-4xl xl:text-6xl 2xl:text-7xl">
                  New year,
                  <br />
                  new deals!
                </h2>
                <p className="text-center text-[0.6em] sm:text-base xl:text-xl 2xl:text-2xl">
                  Up to 60% off to start
                  <br />
                  transforming your life
                  <br />
                  and mind this new year
                </p>
              </section>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default NewYearsSaleModal;
