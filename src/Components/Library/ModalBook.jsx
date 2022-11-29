import React from "react";
import styled from "styled-components";
import { ButtonStyled } from "../Form/Button.styled";
import { ReactComponent as Book } from "../../assets/modal/Book.svg";
import { ReactComponent as Close } from "../../assets/modal/Close.svg";
import { CloseModalIcon, InactiveDiv, RentHistory } from "./ModalBook.styled";
import LentModal from "./LentModal";
import RentHistoryModal from "./RentHistoryModal";
import { useNavigate } from "react-router-dom";
import InactivateBook from "./Modal/InactivateBook";
import { AnimDown } from "../Main/Main.styled";

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
	gap: 60px;
	position: relative;
	animation: ${AnimDown} 0.4s forwards;
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
	const [book, setBook] = React.useState({});
	const [mainModal, setMainModal] = React.useState(true);
	const [lentModal, setLentModal] = React.useState(false);
	const [rentHistory, setRentHistory] = React.useState();
	const [lastRent, setLastRent] = React.useState([]);
	const [historyModal, setHistoryModal] = React.useState(false);
	const [active, setActive] = React.useState({
		isActive: true,
		description: "",
	});
	const [render, setRender] = React.useState(false);
	const [activeModal, setActiveModal] = React.useState(false);
	const navigate = useNavigate();

	const getBooks = async () => {
		const response = await fetch(`http://192.168.1.65:3000/books/${bookId}`);
		const json = await response.json();
		setBook(json);
		if (!json.status.isActive) setActive(json.status);
		if (json.rentHistory.length > 0) {
			isLent(json.rentHistory);
			let rentHistory = json.rentHistory;
			setLastRent(rentHistory[rentHistory.length - 1]);
		}
	};

	function lentButton() {
		if (!active.isActive) {
			return (
				<ButtonStyled
					gap="12px"
					fontWeight="600"
					width="100%"
					border="1px solid #adb5bd"
					background="#FFC50190"
					onClick={lentBook}
					disabled
				>
					<Book style={{ opacity: "0.5" }} />
					Emprestar
				</ButtonStyled>
			);
		} else if (rentHistory) {
			return (
				<ButtonStyled
					gap="12px"
					fontWeight="600"
					width="100%"
					border="1px solid #adb5bd"
					background="#f4f4f4"
					onClick={returnBook}
				>
					<Book />
					Devolver
				</ButtonStyled>
			);
		} else {
			return (
				<ButtonStyled
					gap="12px"
					fontWeight="600"
					width="100%"
					border="1px solid #adb5bd"
					onClick={lentBook}
				>
					<Book />
					Emprestar
				</ButtonStyled>
			);
		}
	}

	React.useEffect(() => {
		getBooks().catch(console.error);
	}, [render]);

	function isLent(lent) {
		let lastRentDate = lent[lent.length - 1].deliveryDate;
		const lentDate = new Date(lastRentDate.split("/").reverse().join("-"));
		if (lentDate > new Date()) {
			setRentHistory(true);
		} else {
			setRentHistory(false);
		}
	}

	function onCloseSecModal() {
		setMainModal(true);
		setRender(!render);
	}

	function checkCloseModal(e) {
		e.target === e.currentTarget && closeModal();
	}

	function closeModal() {
		setModal(false);
	}

	function lentBook() {
		setMainModal(false);
		setLentModal(true);
	}

	function rentHistoryModal() {
		setHistoryModal(true);
		setMainModal(false);
	}

	function inactivateBook() {
		setActiveModal(true);
		setMainModal(false);
	}

	async function returnBook() {
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
		getBooks();
	}

	async function activeBook() {
		book.status = {
			isActive: true,
			description: "",
		};
		await fetch(`http://192.168.1.65:3000/books/${bookId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(book),
		});
		setActive({ isActive: true });
		getBooks();
	}

	function BookEdit() {
		navigate(`/biblioteca/editar/${bookId}`);
	}

	return (
		<ModalContainer onClick={checkCloseModal}>
			{mainModal && (
				<ModalBookMain>
					<CloseModalIcon onClick={closeModal}>
						<Close />
					</CloseModalIcon>
					<ModalBookInfo>
						<ImgContainer>
							<ImgStyle src={book.image} alt={`capa do livro ${book.tittle}`} />
							{lentButton()}
						</ImgContainer>
						<InfoContainer>
							<button autoFocus style={{ border: "0" }}></button>
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
									onClick={BookEdit}
								>
									Editar
								</ButtonStyled>
								{active.isActive === true ? (
									<ButtonStyled
										background="#FFF"
										border="1px solid #ED5E5E"
										color="#ED5E5E"
										onClick={inactivateBook}
									>
										Inativar
									</ButtonStyled>
								) : (
									<ButtonStyled
										background="#FFF"
										border="1px solid #49d749"
										color="#49d749"
										onClick={activeBook}
									>
										Ativar
									</ButtonStyled>
								)}

								<ButtonStyled
									background="#FFF"
									border="1px solid #ADb5BD"
									color="#000000"
									onClick={rentHistoryModal}
								>
									Histórico
								</ButtonStyled>
							</ButtonsContainer>
						</InfoContainer>
					</ModalBookInfo>
					{!active.isActive && (
						<InactiveDiv>
							<h2>Informações da inativação</h2>
							<div>
								<h3>Motivo</h3>
								<p>{active.description}</p>
							</div>
						</InactiveDiv>
					)}
					{rentHistory && active.isActive && (
						<RentHistory>
							<h2>Dados do aluno</h2>
							<table>
								<thead>
									<tr>
										<td>Nome do aluno</td>
										<td>Turma</td>
										<td>Data de retirada</td>
										<td>Data da entrega</td>
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
						</RentHistory>
					)}
				</ModalBookMain>
			)}
			{activeModal && (
				<InactivateBook
					setActiveModal={setActiveModal}
					bookId={bookId}
					onClose={onCloseSecModal}
					book={book}
				/>
			)}
			{lentModal && (
				<LentModal
					book={book}
					setLentModal={setLentModal}
					bookId={bookId}
					onClose={onCloseSecModal}
				/>
			)}
			{historyModal && (
				<RentHistoryModal
					onClose={onCloseSecModal}
					setHistoryModal={setHistoryModal}
					rentHistory={book.rentHistory}
				/>
			)}
		</ModalContainer>
	);
};
export default ModalBook;
