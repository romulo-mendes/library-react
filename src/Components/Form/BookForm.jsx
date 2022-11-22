import React from "react";
import useForm from "../../Hooks/useForm";
import Input from "./Input";
import styled from "styled-components";
import { ReactComponent as Plus } from "../../assets/Plus.svg";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const FormStyles = styled.form`
	display: flex;
	column-gap: 48px;
`;

const InputContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 24px;
`;
const ImgPreview = styled.div`
	width: 172px;
	height: 206px;
	border: 2px dashed #ffc501;
	display: flex;
	justify-content: center;
	align-items: center;
	input {
		width: 172px;
		height: 206px;
		opacity: 0;
		cursor: pointer;
		position: absolute;
	}
	p {
		color: #ffc501;
		font-weight: bold;
		font-size: 20px;
		margin: 8px;
	}
	img {
		width: 170px;
		height: 205px;
		position: relative;
		margin: 2px;
		border-radius: 2px;
	}
`;
const Select = styled.select``;

const BookForm = () => {
	const title = useForm();
	const author = useForm();
	const entryDate = useForm();
	const synopsis = useForm();
	const navigate = useNavigate();
	const [img64, setImg64] = React.useState("");

	function ImgChange({ target }) {
		const getImg = target.files;
		if (getImg.length > 0) {
			const loadingImg = getImg[0];
			const readFile = new FileReader();
			readFile.readAsDataURL(loadingImg);
			readFile.onloadend = function (loadingImg) {
				const imgBase64 = loadingImg.target.result;
				setImg64(imgBase64);
			};
		}
	}

	function BookSubmit(e) {
		e.preventDefault();

		const books = {
			id: uuidv4(),
			tittle: title.value,
			author: author.value,
			genre: genre.value,
			status: {
				isActive: true,
				description: "",
			},
			image: img64,
			systemEntryDate: entryDate.value.split("-").reverse().join("/"),
			synopsis: synopsis.value,
			rentHistory: [],
		};
		const postBooks = async () => {
			const response = await fetch("http://192.168.1.65:3000/books", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(books),
			});
			const json = await response.json();
		};
		postBooks().catch(console.error);
		BackToHome();
	}

	function BackToHome() {
		navigate("/home");
	}

	return (
		<FormStyles onSubmit={BookSubmit}>
			<ImgPreview>
				{img64 ? (
					<img src={img64} />
				) : (
					<>
						<input type="file" name="img" id="img" onChange={ImgChange} />
						<Plus />
						<p>Capa</p>
					</>
				)}
			</ImgPreview>
			<InputContainer>
				<Input
					type="text"
					name="title"
					placeholder="Título"
					forstyle="books"
					{...title}
				/>
				<Input
					type="text"
					name="author"
					placeholder="Autor"
					forstyle="books"
					{...author}
				/>
				<Input
					type="text"
					name="synopsis"
					placeholder="Sinopse"
					forstyle="books"
					{...synopsis}
				/>
				<Select defaultValue={"default"} name="genre" id="genre">
					<option value="default" disabled>
						Gênero
					</option>
					<option value="Fantasia">Fantasia</option>
					<option value="Ação e Aventura">Ação e Aventura</option>
					<option value="Horror">Horror</option>
					<option value="Romance">Romance</option>
				</Select>
				<Input
					type="text"
					name="entryDate"
					placeholder="Data de entrada"
					forstyle="books"
					onFocus={(e) => (e.target.type = "date")}
					onBlur={({ target }) => {
						if (!target.value) target.type = "text";
					}}
					{...entryDate}
				/>
			</InputContainer>
			<div>
				<button>Salvar</button>
				<button onClick={BackToHome}>Cancelar</button>
			</div>
		</FormStyles>
	);
};

export default BookForm;
