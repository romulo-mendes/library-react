import styled from "styled-components";
export const LogoutBox = styled.div`
	background-color: #f4f4f4;
	border-radius: 5px;
	padding: 15px;
	margin: 16px 0;
	width: 148px;
	height: 57px;
	position: absolute;
	top: 26px;
	right: 0;
	transition: 0.3s;
	z-index: 2;
	p {
		font-family: "Poppins", sans-serif !important;
	}
`;
export const UserButton = styled.div`
	display: flex;
	align-items: center;
	font-size: 18px;
	cursor: pointer;
	position: relative;
	gap: 8px;
	cursor: pointer;
	@media (max-width: 430px) {
		p {
			display: none;
		}
	}
`;
export const NavStyles = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 0 24px;
	align-items: center;
	height: 96px;
	background: #fff;
`;
