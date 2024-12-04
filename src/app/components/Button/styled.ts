import styled from "styled-components";
import { PropsI } from "./types";

export const Container = styled.button<PropsI>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  height: 50px;
  padding: 15px 30px;
  font-size: 14px;
  outline: none;
  border: none;
  font-family: Inter;
  font-weight: 600;
  border: 1px solid ${({ $danger }) => ($danger ? "#EB6467" : "#47A98E")};
  border-radius: 10px;
  color: ${({ $outlined }) => ($outlined ? "#28272F" : "white")};
  background-color: ${({ $outlined, $danger }) =>
    $outlined ? "white" : $danger ? "#EB6467" : "#47A98E"};
  transition: opacity 0.3s ease-in-out;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }

  .icon,
  .chevron {
    position: relative;
    top: 2px;
  }
`;
