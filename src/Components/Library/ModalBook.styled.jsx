import styled from "styled-components";

export const CloseModalIcon = styled.div`
	position: absolute;
	margin: 24px;
	top: 0;
	right: 0;
	cursor: pointer;
`;

export const RentHistory = styled.div`
	width: 100%;
	h2 {
		font-size: 20px;
		color: #3e4756;
		margin-bottom: 16px;
	}
	table {
		width: 100%;
		background: #f4f4f4;
		border-radius: 5px;
		padding: 16px;
		font-size: 16px;
		table-layout: fixed;

		thead {
			color: #3e4756;
			font-weight: 600;
			tr > td {
				padding-bottom: 8px;
			}
		}
		tbody {
			font-weight: 300;
		}
	}
`;