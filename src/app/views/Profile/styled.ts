import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 30px;
    font-weight: 600;
  }
  .box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #ffffff;
    margin-top: 40px;
    padding: 40px;
    @media only screen and (max-width: 530px) {
      padding: 20px;
    }
    border-radius: 20px;
    > * {
      max-width: 420px;
    }

    .button-wrapper {
      display: flex;
      flex-direction: column;
      label {
        color: #88878B;
        font-size: 14px;
        margin-bottom: 10px
      }
      .error-message {
        color: #EB6467;
        font-size: 14px;
        margin-top: 10px;
      }
    }
  }
`