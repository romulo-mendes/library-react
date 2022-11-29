import styled from "styled-components";

export const HomeContainer = styled.section`
	border-radius: 5px;
	margin: 24px;
	background-color: #fff;
	padding: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;
	height: calc(100vh - 144px);
	@media (max-width: 900px) {
		flex-wrap: wrap;
		height: auto;
	}
`;
