import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import NewBook from "./Components/NewBook/NewBook";
import NotFound from "./Components/Helper/NotFound";
import Library from "./Components/Library/Library";
import RentHistory from "./Components/RentHistory/RentHistory";
import LoginForm from "./Components/Login/LoginForm";
import EditBook from "./Components/EditBook/EditBook";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<LoginForm />} />
				<Route path="home" element={<Home />} />
				<Route path="cadastro" element={<NewBook />} />
				<Route path="biblioteca" element={<Library />} />
				<Route path="biblioteca/editar/:bookId" element={<EditBook />} />
				<Route path="historico" element={<RentHistory />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
