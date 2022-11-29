import styled from "styled-components";

export const RentHistoryContainer = styled.div`
	padding: 90px 25px;
	background-color: #fff;
	margin: 24px;
	min-height: 624px;
	position: relative;
	overflow-x: hidden;

	table {
		width: 100%;
		overflow-x: auto;
		thead {
			font-size: 16px;
			font-weight: 600;
			background-color: #ffc501;
			td {
				padding: 10px 0 10px 40px;
			}
		}
		tbody {
			td {
				border-bottom: 1px solid #ddd;
				padding: 20px 0 10px 40px;
			}
		}
	}
	.inputTr {
		td {
			div {
				display: flex;
				position: relative;
				padding-bottom: 9px;
				gap: 9px;
				align-items: center;
				::after {
					content: "";
					display: inline-block;
					position: absolute;
					border-bottom: 1px solid #000;
					width: 105px;
					bottom: 0;
				}
			}
			input {
				border: 0;
				outline: 0;
				width: 100%;
			}
		}
	}
`;
