import styled from 'styled-components';


export const Container = styled.div`
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 40px;
    @media only screen and (max-width: 1023px) {
      margin-bottom: 20px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media only screen and (max-width: 1023px) {
      gap: 10px;
    }

    li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 20px;
      background-color: white;
      padding: 40px;

      @media only screen and (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        padding: 20px;
      }
      .name {
        display: flex;
        align-items: center;
        font-size: 25px;
        font-weight: 600;
        line-height: 30.26px;
        gap: 10px;

        @media only screen and (max-width: 1023px) {
          font-size: 20px;
          line-height: 24.2px;
        }

        img {
          @media only screen and (max-width: 1023px) {
            width: 8px;
            height: 8px;
          }
        }
      }
      > div {
        &.data {
          gap: 5px;
          @media only screen and (max-width: 1023px) {
            display: flex;
            flex: 1;
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
          }
          &.action {
            width: 141px;

            @media only screen and (max-width: 1023px) {
              width: 100%;
            }

            button {
              width: 100%;
            }
          }
        }
        .title {
          font-size: 14px;
          color: #88878B;
          line-height: 16.94px;
        }
        .value {
          font-size: 18px;
          line-height: 21.78px;
          margin-top: 5px;
          white-space: nowrap;
          font-weight: 600;
          color: #28272F;
          max-width: 210px;
          @media only screen and (max-width: 1023px) {
            font-size: 16px;
            line-height: 19px;
            margin-top: 0;
          }
        }
      }
    }
  }
`