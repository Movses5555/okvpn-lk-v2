import styled from "styled-components";

export const ModalContainer = styled.div`
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 40px;
    @media only screen and (max-width: 768px) {
      margin-top: 20px;
      margin-bottom: 40px;
      font-size: 20px;
    }
  }

  .boxes {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .action {
    margin-top: 40px;
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