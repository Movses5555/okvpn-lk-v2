import styled from "styled-components";

export const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
    font-family: Inter;
    label {
        color: #88878B;
        font-size: 14px;
        margin-bottom: 10px
    }

    input { 
        font-weight: 600;
        font-size: 14px;
        outline: 0;
        border-radius: 10px;
        padding: 16px 30px;
        height: 50px;
        border-style: solid;
        border-color: #F3F3F3;
        background-color: #F3F3F3;
        font-family: Inter;
    }

    .error-message {
        color: #EB6467;
        font-size: 14px;
        margin-top: 10px;
    }
`;
