import React from "react";
import BookForm from "../Form/BookForm";
import Back from "../Main/Back";
import { MainContainer } from "../Main/Main.styled";
import Nav from "../Nav/Nav";
import { EditBookContainer } from "./EditBook.styled";

const EditBook = () => {
	return (
		<MainContainer style={{ height: "100vh", overflowX: "hidden" }}>
			<Nav />
			<EditBookContainer>
				<Back link="/biblioteca" back="Biblioteca" current="Editar livro" />
				<BookForm />
			</EditBookContainer>
		</MainContainer>
	);
};

export default EditBook;
