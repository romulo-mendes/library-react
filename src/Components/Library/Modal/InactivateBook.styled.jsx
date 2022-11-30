import styled from "styled-components";
import { AnimDown } from "../../Main/Main.styled";

export const FormContainer = styled.form`
	padding: 40px;
	width: 100%;
	max-width: 804px;
	background-color: #fff;
	margin: 10px;
	margin-bottom: auto;
	display: flex;
	flex-direction: column;
	gap: 24px;
	position: relative;
	animation: ${AnimDown} 0.4s forwards;
	@media (max-width: 450px) {
		padding: 30px 10px;
	}

	textarea {
		width: 100%;
		height: 129px;
		border-radius: 5px;
		outline: 0;
		border: 1px solid #133052;
		padding: 16px;
		color: #133052;
		::placeholder {
			font-size: 16px;
			color: #133052;
		}
	}
	h2 {
		font-size: 20px;
		color: #3e4756;
	}
	button {
		align-self: flex-end;
	}
`;
