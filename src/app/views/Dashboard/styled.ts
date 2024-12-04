import styled from 'styled-components';


export const Container = styled.div`
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;

    li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media only screen and (max-width: 1400px) {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
      }
      border-radius: 20px;
      gap: 66px;
      background-color: white;
      padding: 40px;
      .name {
        position: relative;
        &::before {
          position: absolute;
          left: -15px;
          top: 8px;
          display: block;
          content: '';
          width: 8px;
          height: 8px;
          background-color: #47A98E;
          border-radius: 100%;
        }
        font-size: 25px;
        font-weight: 600;
      }
      > div {
        &.data {
          display: flex;
          flex-direction: column;
          @media only screen and (max-width: 1400px) {
            flex: 1;
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
          }
          gap: 5px;
          &.action {
            button {
              width: 100%;
            }
          }
        }
        .title {
          font-size: 14px;
          color: #88878B;
        }
        .value {
          font-size: 18px;
          @media only screen and (max-width: 1400px) {
            font-size: 16px;
          }
          white-space: nowrap;
          font-weight: 600;
        }
      }
    }
  }
`