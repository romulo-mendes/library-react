import React from "react";
import { MainContainer } from "../Main/Main.styled";
import Nav from "../Nav/Nav";
import styled from "styled-components";
import Back from "../Main/Back";
import BookForm from "../Form/BookForm";

const NewbookContainer = styled.div`
	background-color: #fff;
	padding: 24px;
	margin: 24px;
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 144px);
	@media (max-width: 860px) {
		height: 100%;
	}
`;

const NewBook = () => {
	return (
		<MainContainer>
			<Nav />
			<NewbookContainer>
				<Back link="/home" back="Home" current="Cadastrar novo livro" />
				<BookForm />
			</NewbookContainer>
		</MainContainer>
	);
};

export default NewBook;
