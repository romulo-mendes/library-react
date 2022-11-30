import styled from "styled-components";
import { AnimDown } from "../../Main/Main.styled";

export const LentModalStyled = styled.div`
	max-width: 804px;
	width: 100%;
	margin: 10px 10px auto 10px;
	border: 1px solid #707070;
	background: #fff;
	position: relative;
	padding: 40px;
	display: flex;
	flex-direction: column;
	animation: ${AnimDown} 0.4s forwards;
	h2 {
		font-size: 20px;
		color: #3e4756;
	}
	button {
		align-self: flex-end;
		@media (max-width: 810px) {
			align-self: center;
		}
	}
`;

export const LentForm = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 24px;
	margin-top: 24px;
	margin-bottom: 40px;
	@media (max-width: 810px) {
		display: flex;
		flex-direction: column;
		gap: 15px;
        align-self: center;
	}
`;
