import React from "react";
import { useParams } from "react-router-dom";
import BookForm from "../Form/BookForm";
import Back from "../Main/Back";
import { EditBookContainer } from "./EditBook.styled";

const EditBook = () => {
	const { bookId } = useParams();
	return (
		<EditBookContainer>
			<Back link="/biblioteca" back="Biblioteca" current="Editar livro" />
			<BookForm bookId={bookId} />
		</EditBookContainer>
	);
};

export default EditBook;
