"use client";

import { useContext } from "react";
import { createPortal } from "react-dom";

import Image from "next/image";

import { Wrapper, WindowContainer } from "./styled";
import { ModalPropsI, WindowPropsI } from "./types";

import { Context } from "./context";

export const Modal = (props: ModalPropsI) => {
  const { open, children } = props;
  const anyOpenModal = !!open.length;

  return createPortal(
    <Wrapper $anyOpenModal={anyOpenModal}>
      <Context.Provider
        value={{
          open,
        }}
      >
        <div className="fade"></div>
        {children}
      </Context.Provider>
    </Wrapper>,
    document.querySelector("body") as HTMLBodyElement
  );
};

export const Window = (props: WindowPropsI) => {
  const { onRequestToClose, name } = props;
  const { open } = useContext(Context);
  const isOpen = !!open.find((c) => c === name);
  return (
    <WindowContainer $isOpen={isOpen}>
      <button className="close-modal" onClick={() => onRequestToClose(name)}>
        <Image src="/fi-sr-cross.svg" width={24} height={24} alt="" />
      </button>
      <div className="modal-content">{props.children}</div>
    </WindowContainer>
  );
};
