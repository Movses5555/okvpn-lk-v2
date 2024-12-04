import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-block;
  width: auto;
  height: auto;

  /* Target the Telegram login button */
  .tg-login-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 15px 25px;
    background-color: #3dabe5;
    color: transparent; /* Hide the original text */
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    text-align: center;

    /* Hide the original Telegram button text */
    & span {
      visibility: hidden; /* Hide the original text */
    }

    /* Add custom text */
    &::after {
      content: "Войти через Телеграм"; /* Your custom text */
      visibility: visible; /* Ensure the custom text is visible */
      color: white;
      font-size: 16px;
      font-weight: 600;
    }

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
