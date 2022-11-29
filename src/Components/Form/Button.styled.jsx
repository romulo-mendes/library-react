import styled from "styled-components";

export const ButtonStyled = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: ${(props) => props.gap || "0"};
	border-radius: ${(props) => props.borderRadius || "5px"};
	height: ${(props) => props.height || "53px"};
	width: ${(props) => props.width || "auto"};
	background: ${(props) => props.background || "#FFC501"};
	border: ${(props) => props.border || "0"};
	padding: ${(props) => props.padding || "16px 24px"};
	font-weight: ${(props) => props.fontWeight || "600"};
	font-size: ${(props) => props.fontSize || "16px"};
	color: ${(props) => props.color || "600"};
	cursor: pointer;
	transition: 0.2s;
	:hover {
		box-shadow: currentColor 1px 1px 5px 0px;
	}
	:disabled {
		cursor: not-allowed;
	}
`;
