import React from "react";
import { MainContainer } from "../Main/Main.styled";
import Nav from "../Nav/Nav";
import styled from "styled-components";
import Back from "../Main/Back";
import LibrarySearch from "./LibrarySearch";
import LibraryBooks from "./LibraryBooks";
import BooksProvider from "../../Contexts/useBooks";
import { Route, Routes } from "react-router-dom";
import EditBook from "../EditBook/EditBook";

const LibraryContainer = styled.div`
	background-color: #fff;
	padding: 24px;
	margin: 24px;
	display: flex;
	position: relative;
	align-items: center;
	flex-direction: column;
`;

const Library = () => {
	return (
		<MainContainer style={{ height: "100vh", overflowX: "hidden" }}>
			<Nav />
			<Routes>
				<Route
					path="/"
					element={
						<LibraryContainer>
							<Back link="/home" back="Home" current="Biblioteca" />
							<BooksProvider>
								<LibrarySearch />
								<LibraryBooks />
							</BooksProvider>
						</LibraryContainer>
					}
				/>
				<Route path="/editar/:bookId" element={<EditBook />} />
			</Routes>
		</MainContainer>
	);
};

export default Library;
