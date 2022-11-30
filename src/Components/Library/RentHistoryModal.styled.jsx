import styled from "styled-components";
import { AnimDown } from "../Main/Main.styled";

export const ContainerRentHistoryModal = styled.div`
	width: 100%;
	max-width: 1058px;
	height: 446px;
	border: 1px solid #707070;
	background-color: #fff;
	padding: 40px;
	overflow-x: auto;
	position: relative;

	animation: ${AnimDown} 0.4s forwards;
	h2 {
		font-size: 20px;
		color: #3e4756;
		font-weight: 600;
		margin-bottom: 30px;
	}
	table {
		min-width: 978px;

		white-space: nowrap;
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
