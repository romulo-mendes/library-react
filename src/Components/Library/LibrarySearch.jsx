import React, { createContext } from "react";
import Input from "../Form/Input";
import { ReactComponent as Search } from "../../assets/Search.svg";
import { useBooks } from "../../Contexts/useBooks";
import Select from "../Form/Select";
import { ButtonStyled } from "../Form/Button.styled";
import { SearchContainer, SearchStyled } from "./LibrarySearch.styled";

export const SearchContext = createContext();

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
