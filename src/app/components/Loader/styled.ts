import styled from "styled-components";

export const SpinnerWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 30px;
	& > div {
		border: 4px solid white;
		border-top: 4px #47A98E solid;
		border-radius: 50%;
		height: 60px;
		width: 60px;
		animation: spin 2s linear infinite;
	
		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
	
			100% {
				transform: rotate(360deg);
			}
		}
	}
`;
