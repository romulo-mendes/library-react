import styled from "styled-components";

export const DivInput = styled.div`
	input {
		padding: 16px;
		font-size: 16px;
		border-radius: 5px;
	}

	${(props) =>
		props.type === "table" &&
		`
			input {
				border: 0;
				outline: 0;
				width: 100%;
				height: 100%;
			}
		`}

	${(props) =>
		props.type === "lent" &&
		`
			input {
				width: 350px;
				height: 53px;
				border: 1px solid #133052;
				color: #3e4756;
				outline: 0;
				:focus {
					border: 2px solid #3e4756;
				}
				::placeholder {
					color: #133052;
				}
			}
		`}
	${(props) =>
		props.type === "login" &&
		`
			input {
				padding: 16px;
				width: 354px;
				height: 51px;
				margin-bottom: 16px;
				background-color: #f1f3f5;
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
			::placeholder {
				color: #123052;
			}
			border: 1px solid #123052;
		}
		`}
		${(props) =>
		props.type === "search" &&
		`
			input {
				width: 100%;
				::placeholder {
					color: #adb5db;
					font-style: italic;
				}
				border: 0;
				outline: 0;
			}
		`}
`;
