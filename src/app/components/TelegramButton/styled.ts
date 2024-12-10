import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-block;

  border-radius: 10px;
  overflow: hidden; /* Ensures no content overflows */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 250px; /* Width of the iframe */
  height: 50px; /* Height of the iframe */
  background-color: #f8f9fa; /* Optional background color for better visibility */

  iframe {
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 250px; /* Adjust the width */
    height: 50px; /* Adjust the height */
  }
`;
