"use client";

import { Container } from "./styled";
import { PropsI } from "./types";
import { IoChevronForward } from "react-icons/io5";

export const Button = ({
  children,
  $chevron = false,
  $outlined = false,
  $danger = false,
  ...rest
}: PropsI) => {
  return (
    <Container {...rest} $chevron={$chevron} $outlined={$outlined} $danger={$danger}>
      {rest.$icon ? <div className="icon">{rest.$icon}</div> : null}
      {children}
      {$chevron ? (
        <div className="chevron">
          <IoChevronForward
            color={$outlined ? ($danger ? "#EB6467" : "#47A98E") : "white"}
          />
        </div>
      ) : null}
    </Container>
  );
};
