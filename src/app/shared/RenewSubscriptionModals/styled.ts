import styled from "styled-components";

export const ModalContainer = styled.div`
  > h1 {
    font-size: 30px;
    font-weight: 600;
    padding: 40px 0;
    @media only screen and (max-width: 768px) {
      padding: 20px 0;
      font-size: 25px;
    }
  }
  .boxes {
    label {
      font-size: 14px;
      color: #88878b;
      line-height: 16.94px;
    }
    .subscription-variants {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      gap: 10px;
      margin-bottom: 40px;
      @media only screen and (max-width: 768px) {
        margin-bottom: 20px;
      }
      li {
        &.active {
          border-color: #47a98e;
        }
        background-color: #F3F3F3;
        flex: 1;
        cursor: pointer;
        height: 100px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        color: #28272F;
        @media only screen and (max-width: 768px) {
          padding: 15px;
          height: 80px;
        }
        justify-content: center;
        border: 1px solid transparent;
        border-radius: 10px;
        h1 {
          font-size: 30px;
          margin-bottom: 3px;
          line-height: 36.31px;
          @media only screen and (max-width: 768px) {
            line-height: 30.26px;
            margin-bottom: 7px;
          }
        }
        p {
          font-size: 14px;
          line-height: 16.94px;
        }
      }
    } 
  }

  .action {
    button {
      width: 100%;
    }
  }
`;
