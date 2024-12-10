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
    width: 135px !important;
    height: 50px !important;

    .tgme_widget_login_button_icon {
      display: none !important;
    }
    
    .tgme_widget_login_button {
      display: inline-block;
      padding: 10px 20px;
      background-color: white;
      color: #212121;
      cursor: pointer;
      text-align: center;

      width: 135px !important;
      height: 50px !important;
      padding: 0px 30px 0px 30px !important;
      gap: 10px;
      border-radius: 10px 0px 0px 0px !important;
      border: 1px 0px 0px 0px;
      opacity: 0px;
      border: 1px solid #47A98E !important;
    }
    
    .tgme_widget_login_button:hover {
      background-color: #f5f5f5; /* Slight gray background on hover */
      color: #212121; /* Maintain text color on hover */
    }
  }
`;
