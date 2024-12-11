import styled from "styled-components";


export const Container = styled.div`
  label {
    display: block;
    margin-bottom: 10px;
    color: #88878B;
    font-size: 14px;
    font-weight: 400;
  }
`

export const SelectContainer = styled.div`
  position: relative;
  min-width: 280px;
`;

export const SelectHeader = styled.div`
  padding: 10px;
  background: white;
  border: 1px solid #f3f3f3;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28.4px;
  background-color: #f3f3f3;
  height: 50px;
`;

export const SelectList = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background: #f3f3f3;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 1;
  top: 60px;
`;

export const SelectListItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #dedede;
  }
`;
