import styled from "styled-components";

export const Wrapper = styled.div`
  width: "100%";
  height: "50px";
  border-radius: "10px";
  position: "relative";

  button {
    position: 'absolute';
    top: 0;
    left: 0;
    z-index: 1;
    width: "135px";
    height: "50px";
    border-radius: "10px";
    border: "1px solid #47A98E";
    background-color: "#3DABE5";
    color: "#28272F";
    font-size: "14px";
    line-height: "16.94px";
    cursor: "pointer";
    display: "flex";
    justify-content: "center";
    align-items: "center";
  }

  iframe {
    opacity: 0;
    width: 100% !important;
    height: 50px !important;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
`;
