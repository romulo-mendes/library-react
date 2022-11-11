import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Library } from "../../assets/Logo.svg";
import { ReactComponent as People } from "../../assets/nav/People.svg";
import { ReactComponent as Arrow } from "../../assets/nav/Arrow.svg";

const Nav = () => {
	const navigate = useNavigate();
	const [user, setUser] = React.useState();

	React.useEffect(() => {
		const email = window.localStorage.getItem("email");
		if (!email) {
			navigate("/");
		} else setUser(email);
	}, []);

	return (
		<nav>
			<Library />
			<div>
				<People />
				<p>{user}</p>
				<Arrow />
			</div>
		</nav>
	);
};

export default Nav;
