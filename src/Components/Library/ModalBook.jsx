import React, { useEffect } from "react";
import styled from "styled-components";
import { ButtonStyled } from "../Form/Button.styled";
import { ReactComponent as Book } from "../../assets/modal/Book.svg";
import { ReactComponent as Close } from "../../assets/modal/Close.svg";
import { CloseModalIcon } from "./ModalBook.styled";
import LentModal from "./LentModal";

const ModalContainer = styled.div`
	width: 100vw;
	height: calc(100% + 144px);
	background: #343a4070;
	display: flex;
	justify-content: center;
	padding-top: 55px;

	position: absolute;
	top: -120px;
`;
const ModalBookMain = styled.div`
	margin-bottom: auto;
	background: #fff;
	min-height: 585px;
	width: 816px;
	padding: 70px 40px 40px 40px;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 32px;
	position: relative;
`;

const ModalBookInfo = styled.div`
	display: grid;
	gap: 40px;
	grid-template-columns: 1fr 2fr;
`;

const ImgContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

const ImgStyle = styled.img`
	max-width: 272px;
	max-height: 390px;
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	h2 {
		text-align: center;
		color: #3e4756;
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 24px;
	}
	h4 {
		font-size: 16px;
		color: #3e4756;
		margin-bottom: 8px;
	}
	p {
		color: #3e4756;
		font-size: 16px;
		font-weight: 200;
		margin-bottom: 24px;
	}
`;

const ButtonsContainer = styled.div`
	display: flex;
	gap: 24px;
	margin-top: auto;
	align-self: center;
`;

const ModalBook = ({ bookId, setModal }) => {
	const [book, setBook] = React.useState([]);
	const [MainModal, setMainModal] = React.useState(true);
	const [lentModal, setLentModal] = React.useState(false);
	const [rentHistory, setRentHistory] = React.useState(false);
	const [lastRent, setLastRent] = React.useState([]);

	React.useEffect(() => {
		const getBooks = async () => {
			const response = await fetch(`http://192.168.1.65:3000/books/${bookId}`, {
				method: "GET",
			});
			const json = await response.json();
			setBook(json);
			if (json.rentHistory.length > 0) {
				IsLent(json.rentHistory);
				let rentHistory = json.rentHistory;
				setLastRent(rentHistory[rentHistory.length - 1]);
			}
		};
		getBooks().catch(console.error);
	}, []);

	function IsLent(lent) {
		let lastRentDate = lent[lent.length - 1].deliveryDate;
		const lentDate = new Date(lastRentDate.split("/").reverse().join("-"));
		if (lentDate > new Date()) {
			setRentHistory(true);
		} else {
			setRentHistory(false);
		}
	}

	function CheckCloseModal(e) {
		e.target === e.currentTarget && CloseModal();
	}

	function CloseModal() {
		setModal(false);
	}

	function LentBook() {
		setMainModal(false);
		setLentModal(true);
	}

	async function ReturnBook() {
		let currentDate = new Date();
		book.rentHistory[book.rentHistory.length - 1].deliveryDate =
			currentDate.toLocaleDateString();
		await fetch(`http://192.168.1.65:3000/books/${bookId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(book),
		});
	}

	return (
		<ModalContainer onClick={CheckCloseModal}>
			{MainModal && (
				<ModalBookMain>
					<CloseModalIcon onClick={CloseModal}>
						<Close />
					</CloseModalIcon>
					<ModalBookInfo>
						<ImgContainer>
							<ImgStyle src={book.image} alt={`capa do livro ${book.tittle}`} />
							{rentHistory ? (
								<ButtonStyled
									gap="12px"
									fontWeight="600"
									width="100%"
									border="1px solid #adb5bd"
									background="#f4f4f4"
									onClick={ReturnBook}
								>
									<Book />
									Devolver
								</ButtonStyled>
							) : (
								<ButtonStyled
									gap="12px"
									fontWeight="600"
									width="100%"
									border="1px solid #adb5bd"
									onClick={LentBook}
								>
									<Book />
									Emprestar
								</ButtonStyled>
							)}
						</ImgContainer>
						<InfoContainer>
							<h2>{book.tittle}</h2>
							<div>
								<h4>Sinopse</h4>
								<p>{book.synopsis}</p>
								<h4>Autor</h4>
								<p>{book.author}</p>
								<h4>Gênero</h4>
								<p>{book.genre}</p>
								<h4>Data de entrada</h4>
								<p>{book.systemEntryDate}</p>
							</div>
							<ButtonsContainer>
								<ButtonStyled
									background="#FFF"
									border="1px solid #167CE2"
									color="#167CE2"
								>
									Editar
								</ButtonStyled>
								<ButtonStyled
									background="#FFF"
									border="1px solid #ED5E5E"
									color="#ED5E5E"
								>
									Inativar
								</ButtonStyled>
								<ButtonStyled
									background="#FFF"
									border="1px solid #ADb5BD"
									color="#000000"
								>
									Histórico
								</ButtonStyled>
							</ButtonsContainer>
						</InfoContainer>
					</ModalBookInfo>
					{rentHistory && (
						<div>
							<h2>Dados do aluno</h2>
							<div>
								<table>
									<thead>
										<tr>
											<td>Nome do aluno</td>
											<td>Turma</td>
											<td>Data de retirada</td>
											<td>data da entrega</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{lastRent.studentName}</td>
											<td>{lastRent.class}</td>
											<td>{lastRent.withdrawalDate}</td>
											<td>{lastRent.deliveryDate}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					)}
				</ModalBookMain>
			)}
			{lentModal && (
				<LentModal
					book={book}
					setLentModal={setLentModal}
					bookId={bookId}
					setMainModal={setMainModal}
				/>
			)}
		</ModalContainer>
	);
};

export default ModalBook;
