import React, { createContext } from "react";
import Input from "../Form/Input";
import { ReactComponent as Search } from "../../assets/Search.svg";
import styled from "styled-components";
import { useBooks } from "../../Contexts/useBooks";
import Select from "../Form/Select";
import { ButtonStyled } from "../Form/Button.styled";

export const SearchContext = createContext();

const SearchContainer = styled.div`
	display: flex;
	gap: 32px;
	margin: 98px 0 76px 0;
`;

const SearchStyled = styled.form`
	display: flex;
	padding: 8px 8px 8px 16px;
	width: 666px;
	height: 54px;
	border: 1px solid #adb5bd;
	border-radius: 5px;
	justify-content: space-between;
	align-items: center;
	div {
		display: flex;
		width: 100%;
		align-items: center;
	}
`;

const LibrarySearch = () => {
	const { search, setSearch } = useBooks();
	const { category, setCategory } = useBooks();

	const options = [
		{ text: "Titulo", value: "tittle" },
		{ text: "Gênero", value: "genre" },
		{ text: "Autor", value: "author" },
		{ text: "Data de entrada", value: "systemEntryDate" },
	];
	return (
		<SearchContainer>
			<SearchStyled
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<div className="divInput">
					<Search />
					<Input
						type="text"
						name="search"
						placeholder="Pesquisar livro..."
						forstyle="search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				<ButtonStyled height="37px" padding="8px 16px" width="82px">
					Buscar
				</ButtonStyled>
			</SearchStyled>
			<Select
				options={options}
				value={category}
				onChange={(e) => setCategory(e.target.value)}
			/>
		</SearchContainer>
	);
};

export default LibrarySearch;
