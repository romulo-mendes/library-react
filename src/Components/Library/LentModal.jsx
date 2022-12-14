import React from "react";
import { ButtonStyled } from "../Form/Button.styled";
import Input from "../Form/Input";
import { CloseModalIcon } from "./ModalBook.styled";
import { ReactComponent as Close } from "../../assets/modal/Close.svg";
import { ReactComponent as Book } from "../../assets/modal/Book.svg";
import useForm from "../../Hooks/useForm";
import { LentForm, LentModalStyled } from "./Modal/LentModal.styled";

const LentModal = ({ setLentModal, bookId, onClose, book }) => {
	const studentName = useForm();
	const studentClass = useForm();
	const withdrawalDate = useForm();
	const deliveryDate = useForm();

	const postBooks = async (book) => {
		await fetch(`http://localhost:3000/books/${bookId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(book),
		});
	};

	function LentModalSubmit(e) {
		e.preventDefault();
		if (
			studentName.validate() &&
			studentClass.validate() &&
			withdrawalDate.validate() &&
			deliveryDate.validate()
		) {
			const rentHistory = {
				studentName: studentName.value,
				class: studentClass.value,
				withdrawalDate: withdrawalDate.value.split("-").reverse().join("/"),
				deliveryDate: deliveryDate.value.split("-").reverse().join("/"),
			};
			book.rentHistory.push(rentHistory);
			postBooks(book);
			CloseModal();
		}
	}
	function CloseModal() {
		onClose();
		setLentModal(false);
	}
	return (
		<LentModalStyled>
			<CloseModalIcon onClick={CloseModal}>
				<Close />
			</CloseModalIcon>
			<h2>Informe os dados do aluno antes de continuar</h2>
			<LentForm id="lentForm" onSubmit={LentModalSubmit}>
				<Input
					type="text"
					name="studentName"
					label="Nome do Aluno"
					forstyle="lent"
					{...studentName}
				/>
				<Input
					type="text"
					name="studentClass"
					label="Turma"
					forstyle="lent"
					{...studentClass}
				/>
				<Input
					type="text"
					name="withdrawalDate"
					label="Data da Retirada"
					forstyle="lent"
					onFocus={({ target }) => (target.type = "date")}
					onBlur={({ target }) => {
						if (!target.value) target.type = "text";
					}}
					{...withdrawalDate}
				/>
				<Input
					type="text"
					name="deliveryDate"
					label="Data da Entrega"
					forstyle="lent"
					onFocus={(e) => (e.target.type = "date")}
					onBlur={({ target }) => {
						if (!target.value) target.type = "text";
					}}
					{...deliveryDate}
				/>
			</LentForm>
			<ButtonStyled
				form="lentForm"
				gap="12px"
				fontWeight="600"
				width="272px"
				border="1px solid #adb5bd"
			>
				<Book />
				Emprestar
			</ButtonStyled>
		</LentModalStyled>
	);
};

export default LentModal;
