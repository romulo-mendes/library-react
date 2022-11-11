import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import "./App.css";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<Login />} />
					<Route path="/home/*" element={<Main />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
