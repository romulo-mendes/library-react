import React from "react";
import { ButtonStyled } from "../Form/Button.styled";
import { ReactComponent as Book } from "../../assets/modal/Book.svg";
import { ReactComponent as Close } from "../../assets/modal/Close.svg";
import {
	ButtonsContainer,
	CloseModalIcon,
	ImgContainer,
	ImgStyle,
	InactiveDiv,
	InfoContainer,
	ModalBookInfo,
	ModalBookMain,
	ModalContainer,
} from "./ModalBook.styled";
import LentModal from "./LentModal";
import RentHistoryModal from "./RentHistoryModal";
import { useNavigate } from "react-router-dom";
import InactivateBook from "./Modal/InactivateBook";
import RentTable from "./Modal/RentTable";
import useStateBook from "../../Hooks/useStateBook";

const ModalBook = ({ bookId, setModal }) => {
	const [book, setBook] = useStateBook();
	const [mainModal, setMainModal] = React.useState(true);
	const [lentModal, setLentModal] = React.useState(false);
	const [rentHistory, setRentHistory] = React.useState();
	const [historyModal, setHistoryModal] = React.useState(false);
	const [active, setActive] = React.useState({
		isActive: true,
		description: "",
	});
	const [render, setRender] = React.useState(false);
	const [activeModal, setActiveModal] = React.useState(false);
	const navigate = useNavigate();

	const lastRent = book.rentHistory[book.rentHistory.length - 1];

	const getBooks = async () => {
		const response = await fetch(`http://localhost:3000/books/${bookId}`);
		const json = await response.json();
		setBook(json);
		if (!json.status.isActive) setActive(json.status);
		if (json.rentHistory.length > 0) {
			setRentHistory(isLent(json.rentHistory));
		}
	};

	function LentButton() {
		const communStyle = {
			gap: "12px",
			fontWeight: "600",
			width: "100%",
			border: "1px solid #adb5bd",
		};
		if (!active.isActive) {
			return (
				<ButtonStyled
					{...communStyle}
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
				<ButtonStyled {...communStyle} background="#f4f4f4" onClick={returnBook}>
					<Book />
					Devolver
				</ButtonStyled>
			);
		}
		return (
			<ButtonStyled {...communStyle} onClick={lentBook}>
				<Book />
				Emprestar
			</ButtonStyled>
		);
	}

	React.useEffect(() => {
		getBooks().catch(console.error);
	}, [render]);

	function isLent(lent) {
		let lastRentDate = lent[lent.length - 1].deliveryDate;
		const lentDate = new Date(lastRentDate.split("/").reverse().join("-"));
		if (lentDate > new Date()) return true;
		return false;
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
		await fetch(`http://localhost:3000/books/${bookId}`, {
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
		await fetch(`http://localhost:3000/books/${bookId}`, {
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
							<LentButton />
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
					{rentHistory && active.isActive && <RentTable lastRent={lastRent} />}
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
