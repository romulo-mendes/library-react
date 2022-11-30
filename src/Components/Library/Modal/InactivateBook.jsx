import React from "react";
import { ButtonStyled } from "../../Form/Button.styled";
import { CloseModalIcon } from "../ModalBook.styled";
import { ReactComponent as Close } from "../../../assets/modal/Close.svg";
import { FormContainer } from "./InactivateBook.styled";

const InactivateBook = ({ setActiveModal, bookId, onClose, book }) => {
	const [value, setValue] = React.useState("");

	const editBooks = async (book) => {
		await fetch(`http://localhost:3000/books/${bookId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(book),
		});
	};

	function closeModal() {
		onClose();
		setActiveModal(false);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const status = {
			isActive: false,
			description: value,
		};
		book.status = status;
		editBooks(book);
		closeModal();
	}

	return (
		<FormContainer onSubmit={handleSubmit}>
			<CloseModalIcon onClick={closeModal}>
				<Close />
			</CloseModalIcon>
			<h2>Inativar Livro</h2>
			<textarea
				placeholder="Descrição"
				name="inactivate"
				id="inactivate"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			></textarea>
			<ButtonStyled
				width="100px"
				background="#FFF"
				border="1px solid #ED5E5E"
				color="#ED5E5E"
			>
				Inativar
			</ButtonStyled>
		</FormContainer>
	);
};
export default InactivateBook;
