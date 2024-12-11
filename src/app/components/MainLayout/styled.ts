import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  .mobile-hamburger-header {
    display: none;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 20px;
    background-color: white;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    
    @media only screen and (max-width: 1280px) {
      display: flex;
    }

    &.closed {
      display: none !important;
    }
    .hamburger {
      cursor: pointer;
      width: 24px;
      height: 24px;
    }
  }
  .fade {
    &.open {
      display: flex;
    }
    .close {
      cursor: pointer;
      padding: 23px;
      height: 24px;
      display: inline-block;
    }
    display: none;
    position: fixed;
    justify-content: flex-end;
    width: 100vw;
    height: 100vh;
    background-color: #28272F80;
    z-index: 100;
  }
  .sidebar {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: white;
    height: 100vh;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    transition: left ease-in-out 0.3s;
    @media only screen and (max-width: 1280px) {
      &.closed {
        left: -300px
      }
    }
    .icon-container {
      padding: 40px 20px;
      @media only screen and (max-width: 1280px) {
        display: none;
      }
    }

    .navigation {
      flex: 1;
      padding: 0 20px;
      @media only screen and (max-width: 1280px) {
        padding: 20px;
      }
      li {
        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 10px;
        padding: 15px 30px;
        height: 50px;
        font-size: 14px;
        font-weight: 600;
        border-radius: 10px;
        svg {
          color: #47a98e;
        }
        &.active {
          background-color: #47a98e;
          color: white;
          svg {
            color: white;
          }
        }
      }
    }

    .actions {
      flex: 0 0 50px;
      padding: 40px 20px;
      .action {
        cursor: pointer;
        background-color: #f3f3f3;
        color: #28272f;
        padding: 16px 30px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 600;
        font-size: 14px;
        border-radius: 10px;
        svg {
          color: #47a98e;
        }
      }
    }
  }
  .content {
    margin-left: 300px;
    padding: 40px;
    @media only screen and (max-width: 1280px) {
      margin-left: 0px;
      padding: 20px;
    }
    &.blur {
      filter: blur(4px);
    }
  }
  
`;
