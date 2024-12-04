"use client";

import { useMediaQuery } from "@uidotdev/usehooks";
import { Container } from "./styled";
import { PropsI } from "./types";
import { BiSolidCopy } from "react-icons/bi";

export const InputClipboard = ({
  label,
  onChange,
  value,
  placeholder = "",
  type = "text",
}: PropsI) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 456px)");

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
          <BiSolidCopy color="#47A98E" size={20} />
        </div>
      ) : (
        <button onClick={() => copyToClipboard()}>скопировать</button>
      )}
    </Container>
  );
};
