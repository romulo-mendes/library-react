import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import "./App.css";
import Home from "./Components/Home/Home";
import NewBook from "./Components/Cadastro/NewBook";
import NotFound from "./Components/Helper/NotFound";
import Library from "./Components/Library/Library";

const Routers = () => {};

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="home" element={<Home />} />
				<Route path="cadastro" element={<NewBook />} />
				<Route path="biblioteca" element={<Library />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
