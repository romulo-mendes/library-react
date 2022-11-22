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
	const [bookId, setBookId] = React.useState("");

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		console.log("top!");
	};

	function Modal(e) {
		setBookId(e.currentTarget.id);
		setModal(true);
	}

	return (
		<CardsContainer>
			{modal && <ModalBook bookId={bookId} setModal={setModal} />}
			{filteredBooks.map((book) => {
				return (
					<LibraryCard
						key={book.id}
						img={book.image}
						id={book.id}
						tittle={book.tittle}
						onClick={Modal}
					/>
				);
			})}
		</CardsContainer>
	);
};

export default LibraryBooks;
