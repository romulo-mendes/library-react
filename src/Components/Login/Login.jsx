import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LostPassword from "./LostPassword";

const Login = () => {
	return (
		<div>
			<div>
				<Routes>
					<Route path="/" element={<LoginForm />} />
					<Route path="lostpassword" element={<LostPassword />} />
				</Routes>
			</div>
		</div>
	);
};

export default Login;
