"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";

import AffirmForm from "./AffirmForm";
import affirmLogo from "../public/assets/affirm-logo.webp";

const ModalWindow = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className="clickable amenti-black w-full skew-x-[-20deg] rounded-none bg-light-blue text-white hover:opacity-100"
      >
        <span className="skew-x-[20deg] uppercase tracking-widest">
          Pay with
          <Image
            src={affirmLogo}
            alt="Affirm Logo"
            className="ml-4 inline h-[1.2rem] w-auto translate-x-[-7px] translate-y-[-5.2px]"
          />
        </span>
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="modal-scrollbar h-[90%] overflow-auto rounded-r-lg scrollbar-thin scrollbar-track-white scrollbar-thumb-dark-pink"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-light-blue">
                Affirm Form
              </ModalHeader>
              <ModalBody>
                <AffirmForm onClose={onClose} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalWindow;
