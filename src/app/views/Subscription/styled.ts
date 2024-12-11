import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 40px;

    @media only screen and (max-width: 990px) {
      margin-bottom: 20px;
    }
  }

  .data-content {
    padding: 40px;
    @media only screen and (max-width: 990px) {
      padding: 20px;
    }
    background-color: #ffffff;
    border-radius: 20px;
    .head {
      display: flex;
      justify-content: space-between;
      margin: 0 0 80px 0;
      @media only screen and (max-width: 990px) {
        margin: 0 0 20px;
        flex-direction: column;
        gap: 20px;
      }
      .data {
        display: flex;
        flex-direction: column;
        @media only screen and (max-width: 990px) {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .title {
          font-size: 14px;
          color: #88878B;
          line-height: 16.94px;
        }
        .value {
          font-size: 18px;
          line-height: 21.78px;
          font-weight: 600;
          position: relative;
          
          @media only screen and (max-width: 990px) {
            font-size: 16px;
            line-height: 19px;
          }
          &.dot-green {
            &::before {
              position: absolute;
              content: "";
              background-color: #47a98e;
              border-radius: 50%;
              width: 8px;
              height: 8px;
              left: -12px;
              top: 5px;
            }
          }
          &.dot-red {
            &::before {
              position: absolute;
              content: "";
              background-color: #EB6467;
              border-radius: 50%;
              width: 8px;
              height: 8px;
              left: -12px;
              top: 5px;
            }
          }
        }
      }
    }
    .actions {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      > * {
        flex: 1;
        @media only screen and (max-width: 990px) {
          flex: none;
        }
      }
      @media only screen and (max-width: 990px) {
        flex-direction: column;
        gap: 10px;
      }
      & > button {
        line-height: 16.94px;
        gap: 10px;
        & > .icon {
          width: 16px;
          height: 16px;
          margin-bottom: 3px;
          & > svg {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
`;
