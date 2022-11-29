import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Library } from "../../assets/Logo.svg";
import { ReactComponent as People } from "../../assets/nav/People.svg";
import { ReactComponent as Arrow } from "../../assets/nav/Arrow.svg";
import { LogoutBox, NavStyles, UserButton } from "./Nav.styled";

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
