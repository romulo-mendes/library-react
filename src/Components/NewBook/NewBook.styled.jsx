import styled from "styled-components";

export const NewbookContainer = styled.div`
	background-color: #fff;
	padding: 24px;
	margin: 24px;
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 144px);
	@media (max-width: 860px) {
		height: 100%;
	}
`;
