import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Library } from "../../assets/Logo.svg";
import { ReactComponent as People } from "../../assets/nav/People.svg";
import { ReactComponent as Arrow } from "../../assets/nav/Arrow.svg";
import { LogoutBox, NavStyles, UserButton } from "./Nav.styled";

const Nav = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState();
	const [showLogout, setShowLogout] = useState(false);

	React.useEffect(() => {
		const email = localStorage.getItem("email");
		if (!email) return navigate("/");
		setUser(email);
	}, []);

	function menuLogout() {
		setShowLogout(!showLogout);
	}
	function logout() {
		localStorage.removeItem("email");
		navigate("/");
	}

	return (
		<NavStyles>
			<Library />
			<UserButton onClick={menuLogout}>
				<People />
				<p>{user}</p>
				<Arrow />
				{showLogout && (
					<LogoutBox onClick={logout}>
						<p>Sair</p>
					</LogoutBox>
				)}
			</UserButton>
		</NavStyles>
	);
};

export default Nav;
