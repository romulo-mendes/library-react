import React from "react";
import { ButtonStyled } from "../Form/Button.styled";
import Input from "../Form/Input";
import { CloseModalIcon } from "./ModalBook.styled";
import { ReactComponent as Close } from "../../assets/modal/Close.svg";
import { ReactComponent as Book } from "../../assets/modal/Book.svg";
import styled from "styled-components";
import useForm from "../../Hooks/useForm";
import { AnimDown } from "../Main/Main.styled";

const LentModalStyled = styled.div`
	width: 804px;
	height: 353px;
	border: 1px solid #707070;
	background: #fff;
	position: relative;
	padding: 40px;
	display: flex;
	flex-direction: column;
	animation: ${AnimDown} 0.4s forwards;
	h2 {
		font-size: 20px;
		color: #3e4756;
	}
	button {
		align-self: flex-end;
	}
`;

const LentForm = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 24px;
	margin-top: 24px;
	margin-bottom: 40px;
`;

const LentModal = ({ setLentModal, bookId, onClose, book }) => {
	const studentName = useForm();
	const studentClass = useForm();
	const withdrawalDate = useForm();
	const deliveryDate = useForm();

	const postBooks = async (book) => {
		await fetch(`http://192.168.1.65:3000/books/${bookId}`, {
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
					placeholder="Nome do Aluno"
					forstyle="lent"
					{...studentName}
				/>
				<Input
					type="text"
					name="studentClass"
					placeholder="Turma"
					forstyle="lent"
					{...studentClass}
				/>
				<Input
					type="text"
					name="withdrawalDate"
					placeholder="Data da Retirada"
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
					placeholder="Data da Entrega"
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
