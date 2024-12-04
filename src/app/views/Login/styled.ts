import styled from "styled-components";

export const Container = styled.div`
  .icon-container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  .login-form {
    margin-top: 230px;
    .title {
        text-align: center;
        margin-bottom: 40px;
        font-weight: 600;
        font-family: Inter;
        font-size: 31px;
        @media only screen and (max-width: 644px) {
          font-size: 25px;
        }
        color: #28272F;
    }
    .box {
      form {
        padding: 40px;
        border-radius: 20px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: center;
        width: 500px;
        @media only screen and (max-width: 644px) {
          max-width: 350px;
          width: 100%;
          padding: 20px;
        }
        background-color: white;
        > * {
          width: 100%;
        }
      }
      .telegram-button {
        display: flex;
        justify-content: center;
        margin: 40px auto 100px;
        width: 500px;

        @media only screen and (max-width: 644px) {
          max-width: 350px;
          width: 100%;
          margin: 20px auto 100px;
        }
      }
      .telegram-button > * {
        width: 100%;
      }
      .telegram-button > div > * {
        width: 100% !important;
      }
      .telegram-button > .icon {
        color: #3DABE5;
      }
      .tgme_widget_login_button{
        width: 100% !important;
      }
      .telegram-button > button {
        width: 100% !important;
      }
    }
  }
`;
