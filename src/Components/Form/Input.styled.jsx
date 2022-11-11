import styled from "styled-components";

export const DivInput = styled.div`
	${(props) =>
		props.type === "login" &&
		`
			input {
				padding: 16px;
				width: 354px;
				height: 51px;
				margin-bottom: 16px;
				background-color: #f1f3f5;
				border-radius: 4px;
				border: none;
			}
			p {
				color: #f02020;
				font-size: 12px;
				font-weight: bold;
			}
		`}
`;
