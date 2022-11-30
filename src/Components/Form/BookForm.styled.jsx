import styled from "styled-components";

export const FormStyles = styled.form`
	display: flex;
	flex-direction: column;
	gap: 32px;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 70px 20px;

	.synopsis {
		position: relative;
		label {
			position: absolute;
			left: 0;
			margin: 8px;
			border-radius: 5px;
			padding: 8px;
			transition: 0.3s;
		}
		textarea:focus + label,
		textarea:valid + label {
			background-color: #fff;
			transform: translate(-4px, -24px);
			font-size: 14px;
		}
		textarea {
			border: 1px solid #133052;
			width: 100%;
			border-radius: 5px;
			padding: 16px;
			height: 129px;
			color: #133052;
			font-size: 16px;
			:focus {
				border: 2px solid #3e4756;
			}
		}
	}
`;
export const DivButtons = styled.div`
	align-self: flex-end;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 24px;
	@media (max-width: 1040px) {
		align-self: auto;
	}
`;

export const DivMainInputs = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 48px;
`;

export const DivLeft = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	gap: 24px;
`;
export const DivRight = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	gap: 24px;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 24px;
`;
export const ImgPreview = styled.div`
	/* @media (max-width: 1079px) {
		margin-top: 100px;
	} */
	width: 172px;
	height: 206px;
	border: 2px dashed #ffc501;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	input {
		width: 172px;
		height: 206px;
		opacity: 0;
		cursor: pointer;
		position: absolute;
	}
	p {
		color: #ffc501;
		font-weight: bold;
		font-size: 20px;
		margin: 8px;
	}
	img {
		width: 168px;
		height: 203px;
		position: absolute;
		margin: 2px;
		border-radius: 2px;
	}
`;
