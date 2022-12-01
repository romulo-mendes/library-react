import React from "react";
import { MainContainer } from "../Main/Main.styled";
import Nav from "../Nav/Nav";
import Back from "../Main/Back";
import BookForm from "../Form/BookForm";
import { NewbookContainer } from "./NewBook.styled";

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
