import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  padding: 8px 8px 8px 36px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  height: 56px;
  input {
    border: none;
    outline: 0;
    background-color: #f3f3f3;
    font-weight: 600;
    font-size: 14px;
  }
  button {
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }

    transition: opacity ease-in-out 0.3s;
    cursor: pointer;
    background-color: #47a98e;
    color: white;
    border: none;
    padding: 10px 20px;
    height: 38px;
    border-radius: 5px;
  }
  .clipboard-mobile-action {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-right: 15px;
  }
`;
