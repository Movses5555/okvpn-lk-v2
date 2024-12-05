import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-block;
  width: auto;
  height: auto;

  .tg-login-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 25px;
    background-color: #3dabe5;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    text-align: center;

    &:hover {
      background-color: #319bb7;
    }

    &:active {
      background-color: #288d97;
    }

    @media only screen and (max-width: 644px) {
      padding: 12px 20px;
      font-size: 14px;
    }
  }
`;
