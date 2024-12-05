import styled from "styled-components";

export const Container = styled.div`
  .icon-container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  .login-form-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    .login-form {
      padding-block: 112px;
      width: 100%;

      .title {
          text-align: center;
          margin-bottom: 40px;
          font-weight: 600;
          font-family: Inter;
          font-size: 31px;
          color: #28272F;

          @media only screen and (max-width: 644px) {
            font-size: 25px;
          }
      }

      .box {
        .form-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-inline: 20px;

          form {
            padding: 40px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            gap: 40px;
            align-items: center;
            max-width: 500px;
            width: 100%;
            background-color: white;
            > * {
              width: 100%;
            }

            @media only screen and (max-width: 644px) {
              max-width: 100%;
              padding: 20px;
              gap: 20px;
            }
          }

          .telegram-button {
            background-color: #3DABE5;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 40px;
            max-width: 500px;
            width: 100%;
  
            @media only screen and (max-width: 644px) {
              max-width: 100%;
              width: 100%;
              margin-top: 20px;
            }

            .error-message {
              color: #EB6467;
              font-size: 14px;
              margin-top: 10px;
            }
          }

        }
      }
    }
  }
`;
