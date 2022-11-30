import styled from "styled-components";
import { AnimDown } from "../Main/Main.styled";

export const ModalContainer = styled.div`
	width: 100vw;
	height: calc(100% + 144px);
	background: #343a4070;
	display: flex;
	justify-content: center;
	padding-top: 55px;

	position: absolute;
	top: -120px;
`;
export const ModalBookMain = styled.div`
	margin: 10px 10px auto 10px;
	margin-bottom: auto;
	background: #fff;
	min-height: 585px;
	width: 816px;
	padding: 70px 40px 40px 40px;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 60px;
	position: relative;
	animation: ${AnimDown} 0.4s forwards;
	@media (max-width: 760px) {
		padding: 70px 10px 10px 10px;
	}
`;

export const ModalBookInfo = styled.div`
	display: grid;
	gap: 40px;
	grid-template-columns: 1fr 2fr;
	@media (max-width: 760px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const ImgContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

export const ImgStyle = styled.img`
	max-width: 272px;
	max-height: 390px;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	h2 {
		text-align: center;
		color: #3e4756;
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 24px;
	}
	h4 {
		font-size: 16px;
		color: #3e4756;
		margin-bottom: 8px;
	}
	p {
		color: #3e4756;
		font-size: 16px;
		font-weight: 200;
		margin-bottom: 24px;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 24px;
	margin-top: auto;
	align-self: center;
	@media (max-width: 400px) {
		gap: 10px;
		flex-wrap: wrap;
		justify-content: center;
	}
`;

export const CloseModalIcon = styled.div`
	position: absolute;
	margin: 24px;
	top: 0;
	right: 0;
	cursor: pointer;
`;

export const InactiveDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;
	h2 {
		color: #3e4756;
		font-size: 20px;
	}
	div {
		padding: 16px;
		background-color: #f4f4f4;
		h3 {
			font-size: 16px;
			color: #3e4756;
			margin-bottom: 8px;
		}
		p {
			font-size: 16px;
			font-weight: 200;
			color: #3e4756;
		}
	}
`;
