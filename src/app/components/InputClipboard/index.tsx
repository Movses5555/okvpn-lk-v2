"use client";

import { useMediaQuery } from 'react-responsive';
import { Container } from "./styled";
import { PropsI } from "./types";
// import { BiSolidCopy } from "react-icons/bi";
import Image from "next/image";

export const InputClipboard = ({
  label,
  onChange,
  value,
  placeholder = "",
  type = "text",
}: PropsI) => {
  const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)' });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value).then(() => {
      console.info("copied into clipboard");
    });
  };

  return (
    <Container>
      {label ? <label>{label}</label> : null}
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      {isSmallDevice ? (
        <div
          className="clipboard-mobile-action"
          onClick={() => copyToClipboard()}
        >
          <Image src="/icons/copy.png" width={20} height={20} alt="copy" />
        </div>
      ) : (
        <button onClick={() => copyToClipboard()}>
          <span>скопировать</span>
        </button>
      )}
    </Container>
  );
};
