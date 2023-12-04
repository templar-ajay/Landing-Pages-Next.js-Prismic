"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import clsx from "clsx";

export default function CTA({ className, style, children }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        className={clsx(
          "block w-full transition-colors duration-200 ease-in-out py-4 md:py-6 px-8 md:px-12 font-display font-semibold text-lg md:text-2xl text-center tracking-wide text-white bg-yellow-400 hover:bg-yellow-500",
          className
        )}
        style={style}
        onClick={onOpen}
      >
        {children}
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent style={{ height: "700px", overflowY: "scroll" }}>
          {(onClose) => (
            <>
              <ModalBody style={{ paddingRight: 0, paddingLeft: 0 }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/survey/r5uGgpzcjkoptC55vMZn"
                  style={{
                    border: "none",
                    // position: "absolute",
                    // bottom: 0,
                    // left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  scrolling="yes"
                  id="r5uGgpzcjkoptC55vMZn"
                  title="Aparato Digestivo"
                ></iframe>
                <script
                  defer
                  async
                  src="https://link.msgsndr.com/js/form_embed.js"
                ></script>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
