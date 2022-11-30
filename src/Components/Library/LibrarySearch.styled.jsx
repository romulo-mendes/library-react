import styled from "styled-components";

export const SearchContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	gap: 32px;
	margin: 98px 0 76px 0;
`;

export const SearchStyled = styled.form`
	display: flex;
	padding: 8px 8px 8px 16px;
	width: 100%;
	max-width: 666px;
	height: 54px;
	border: 1px solid #adb5bd;
	border-radius: 5px;
	justify-content: space-between;
	align-items: center;
	div {
		display: flex;
		width: 100%;
		align-items: center;
	}
	button {
		@media (max-width: 355px) {
			display: none;
		}
	}
`;
