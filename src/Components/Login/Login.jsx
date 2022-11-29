import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LostPassword from "./LostPassword";

const Login = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginForm />} />
			<Route path="lostpassword" element={<LostPassword />} />
		</Routes>
	);
};

export default Login;
