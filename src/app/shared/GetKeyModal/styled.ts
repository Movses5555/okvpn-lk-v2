import styled from "styled-components";

export const ModalContainer = styled.div`
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-block: 40px;
    line-height: 36.31px;
    @media only screen and (max-width: 768px) {
      margin-block: 20px;
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

export const CountryLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`