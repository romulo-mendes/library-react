import React from "react";
import { MainContainer } from "../Main/Main.styled";
import Nav from "../Nav/Nav";
import styled from "styled-components";
import Back from "../Main/Back";
import LibrarySearch from "./LibrarySearch";
import LibraryBooks from "./LibraryBooks";

const LibraryContainer = styled.div`
	background-color: #fff;
	padding: 24px;
	margin: 24px;
	display: flex;
	position: relative;
	align-items: center;
	height: calc(100vh - 144px);
	flex-direction: column;
`;

const Library = () => {
	return (
		<MainContainer>
			<Nav />
			<LibraryContainer>
				<Back link="/home" back="Home" current="Biblioteca" />
				<LibrarySearch />
				<LibraryBooks />
			</LibraryContainer>
		</MainContainer>
	);
};

export default Library;
