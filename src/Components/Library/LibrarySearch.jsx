import React from "react";
import Input from "../Form/Input";
import { ReactComponent as Search } from "../../assets/Search.svg";
import styled from "styled-components";
import useForm from "../../Hooks/useForm";

const ButtonStyled = styled.button`
	border-radius: ${(props) => props.borderRadius || "5px"};
	height: ${(props) => props.height || "53px"};
	width: ${(props) => props.width || "auto"};
	background-color: ${(props) => props.background || "#FFC501"};
	border: ${(props) => props.border || "0"};
	padding: ${(props) => props.padding || "16px 24px"};
	font-weight: ${(props) => props.fontWeight || "400"};
	color: ${(props) => props.color || "600"};
`;

const SearchContainer = styled.div`
	display: flex;
	gap: 32px;
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
	const search = useForm();

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
						{...search}
					/>
				</div>
				<ButtonStyled height="37px" padding="8px 16px" width="82px">
					Buscar
				</ButtonStyled>
			</SearchStyled>
			<select defaultValue={""}>
				<option value="" disabled>
					Selecione
				</option>
				<option value="tittle">Titulo</option>
				<option value="genre">Gênero</option>
				<option value="author">Autor</option>
				<option value="entryDate">Data de entrada</option>
			</select>
		</SearchContainer>
	);
};

export default LibrarySearch;
