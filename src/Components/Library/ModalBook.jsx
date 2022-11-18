import React from "react";
import styled from "styled-components";
import { useBooks } from "../../Contexts/useBooks";

const ModalContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background: #343a4070;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
`;
const ModalBookInfo = styled.div`
	background: #fff;
	min-height: 585px;
	min-width: 816px;
	display: flex;
	padding: 40px;
`;

const ModalBook = ({ bookIndex, setModal }) => {
	const { filteredBooks } = useBooks();

	function CloseModal(e) {
		e.target === e.currentTarget && setModal(false);
	}

	return (
		<ModalContainer onClick={CloseModal}>
			<ModalBookInfo>
				<div>
					<img src={filteredBooks[bookIndex].image} alt="" />
				</div>
				<div>
					<h2>{filteredBooks[bookIndex].tittle}</h2>
				</div>
			</ModalBookInfo>
		</ModalContainer>
	);
};

export default ModalBook;
