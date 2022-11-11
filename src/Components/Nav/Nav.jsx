import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Library } from "../../assets/Logo.svg";
import { ReactComponent as People } from "../../assets/nav/People.svg";
import { ReactComponent as Arrow } from "../../assets/nav/Arrow.svg";
import styled from "styled-components";

const LogoutBox = styled.div`
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
	p {
		font-family: "Poppins", sans-serif !important;
	}
`;
const UserButton = styled.div`
	display: flex;
	align-items: center;
	font-size: 18px;
	cursor: pointer;
	position: relative;
	gap: 8px;
	cursor: pointer;
`;
const NavStyles = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 0 24px;
	align-items: center;
	height: 96px;
	background: #fff;
`;

const Nav = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState();
	const [menuLogout, setMenuLogout] = useState(false);

	React.useEffect(() => {
		const email = window.localStorage.getItem("email");
		if (!email) {
			navigate("/");
		} else setUser(email);
	}, []);

	function MenuLogout() {
		setMenuLogout(!menuLogout);
	}
	function Logout() {
		window.localStorage.removeItem("email");
		navigate("/");
	}

	return (
		<NavStyles>
			<Library />
			<UserButton onClick={MenuLogout}>
				<People />
				<p>{user}</p>
				<Arrow />
				{menuLogout && (
					<LogoutBox onClick={Logout}>
						<p>Sair</p>
					</LogoutBox>
				)}
			</UserButton>
		</NavStyles>
	);
};

export default Nav;
