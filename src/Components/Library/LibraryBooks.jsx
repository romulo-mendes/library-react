import React from "react";
import LibraryCard from "./LibraryCard";
import styled from "styled-components";
import { useBooks } from "../../Contexts/useBooks";
import ModalBook from "./ModalBook";

const CardsContainer = styled.div`
	display: flex;
	gap: 40px;
	flex-wrap: wrap;
	justify-content: center;
	min-height: 45vh;
`;

const LibraryBooks = () => {
	const { filteredBooks } = useBooks();
	const [modal, setModal] = React.useState(false);
	const [bookIndex, setBookIndex] = React.useState("");

	function Modal(e) {
		setBookIndex(e.currentTarget.id);
		setModal(true);
		console.log(bookIndex);
	}

	return (
		<CardsContainer>
			{modal && <ModalBook bookIndex={bookIndex} setModal={setModal} />}
			{filteredBooks.map((book, index) => {
				return (
					<LibraryCard
						key={book.id ? book.id : index}
						img={book.image}
						id={book.id ? book.id : index}
						tittle={book.tittle}
						onClick={Modal}
					/>
				);
			})}
		</CardsContainer>
	);
};

export default LibraryBooks;
