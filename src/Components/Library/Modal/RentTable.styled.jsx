import styled from "styled-components";

export const RentHistory = styled.div`
	width: 100%;
	@media (max-width: 420px) {
		width: 300px;
	}

	h2 {
		font-size: 20px;
		color: #3e4756;
		margin-bottom: 16px;
	}
	table {
		display: block;
		overflow-x: auto;
		max-width: fit-content;
		background: #f4f4f4;
		border-radius: 5px;
		padding: 16px;
		font-size: 16px;

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
