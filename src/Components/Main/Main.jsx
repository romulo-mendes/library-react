import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Nav from "../Nav/Nav";
import styled from "styled-components";
import NewBook from "../Cadastro/NewBook";

const MainContainer = styled.div`
	background: #f4f4f4;
	height: 100vh;
`;

const Main = () => {
	return (
		<MainContainer>
			<Nav />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cadastro" element={<NewBook />} />
				</Routes>
			</main>
		</MainContainer>
	);
};

export default Main;
