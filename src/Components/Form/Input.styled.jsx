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
	${(props) =>
		props.type === "books" &&
		`
		input{
			width: 350px;
			padding: 16px;
			font-size: 16px;
			::placeholder {
				color: #123052;
			}
			border-radius: 5px;
			border: 1px solid #123052;
		}
		`}
		${(props) =>
		props.type === "search" &&
		`
			input {
				width: 100%;
				padding: 16px;
				font-size: 16px;
				::placeholder {
					color: #adb5db;
					font-style: italic;
				}
				border: 0;
				outline: 0;
			}
		`}
`;
