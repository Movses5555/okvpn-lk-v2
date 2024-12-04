import styled from "styled-components";

export const Wrapper = styled.div<{ $anyOpenModal: boolean }>`
  display: ${({ $anyOpenModal }) => ($anyOpenModal ? "flex" : "none")};
  position: fixed;
  top: 0;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1044px) {
    flex-direction: column;
    gap: 20px;
    padding: 0 20px;
  }
  gap: 40px;
  .fade {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: #28272f80;
  }
`;

export const WindowContainer = styled.div<{ $isOpen: boolean }>`
  position: relative;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  z-index: 1000;
  background-color: white;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  .close-modal {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    outline: 0;
    border: none;
    background-color: white;
  }
  .modal-content {
    padding: 0 40px 20px 40px;
    @media only screen and (max-width: 768px) {
      padding: 0 20px 20px 20px;
    }
  }
`;
