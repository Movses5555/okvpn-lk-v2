import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  padding: 6px 6px 6px 30px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  @media only screen and (max-width: 768px) {
    padding: 6px 30px;
  }
  input {
    border: none;
    outline: 0;
    background-color: #f3f3f3;
    font-weight: 600;
    font-size: 14px;
    height: 17px;
  }
  button {
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
    &:active {
      opacity: 0.5;
    }

    transition: opacity ease-in-out 0.3s;
    cursor: pointer;
    background-color: #47a98e;
    color: white;
    border: none;
    padding: 10px 20px;
    height: 38px;
    border-radius: 5px;
    & > span {
      font-size: 14px;
      letter-spacing: 0.8px;
    }
  }
  .clipboard-mobile-action {
    cursor: pointer;
    display: flex;
    align-items: center;
    &:active {
      img {
        opacity: 0.5;
      }
    }
  }
`;
