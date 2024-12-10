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
    
    .tgme_widget_login_button {
      display: inline-block;
      padding: 10px 20px;
      border: 2px solid #54C1A9; /* Green border color */
      border-radius: 12px; /* Rounded corners */
      background-color: white; /* White background */
      color: #212121; /* Dark text color */
      font-size: 16px; /* Adjust font size */
      font-family: Arial, sans-serif; /* Use a clean font */
      cursor: pointer; /* Pointer cursor for hover */
      text-align: center;
      transition: all 0.3s ease-in-out; /* Smooth hover transition */
    }
    
    .tgme_widget_login_button:hover {
      background-color: #f5f5f5; /* Slight gray background on hover */
      color: #212121; /* Maintain text color on hover */
    }
  }
`;
