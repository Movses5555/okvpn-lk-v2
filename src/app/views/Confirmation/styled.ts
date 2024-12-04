import styled from "styled-components";

export const Container = styled.div`
  .icon-container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  .login-form {
    margin-top: 140px;
    .title {
      text-align: center;
      margin-bottom: 40px;
      font-weight: 600;
      font-family: Inter;
      font-size: 31px;
      @media only screen and (max-width: 644px) {
        font-size: 25px;
        margin-bottom: 20px;
      }
      color: #28272f;
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
          gap: 20px;
        }
        background-color: white;
        > * {
          width: 100%;
        }
        .timer-block {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          font-family: Inter;
          font-size: 30px;
          font-weight: 600;
          line-height: 36.31px;
          text-align: left;
          text-underline-position: from-font;
          text-decoration-skip-ink: none;
          text-align: center;

          .timer {
            width: 90px;
            @media only screen and (max-width: 644px) {
              font-size: 25px;
            }
          }
        }
        .actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      }
    }
  }
`;
