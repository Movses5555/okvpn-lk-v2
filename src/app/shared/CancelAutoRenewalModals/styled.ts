import styled from "styled-components";

export const ModalContainer = styled.div`
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-top: 40px;
    width: calc(100% - 30px);
    @media only screen and (max-width: 768px) {
      margin-top: 20px;
      font-size: 25px;
    }
  }
  p {
    font-size: 16px;
    line-height: 19.36px;
    margin-top: 10px;
    @media only screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 24.2px;
    }
  }
  
  .boxes {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .action {
    margin-top: 40px;
    @media only screen and (max-width: 768px) {
      margin-top: 20px;
    }
    > button {
      width: 100%;
    }
  }
`;
