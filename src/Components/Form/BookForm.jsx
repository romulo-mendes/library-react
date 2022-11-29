import React, { useState } from "react";
import Input from "./Input";
import { ReactComponent as Plus } from "../../assets/Plus.svg";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
	DivButtons,
	DivLeft,
	DivMainInputs,
	DivRight,
	FormStyles,
	ImgPreview,
	InputContainer,
} from "./BookForm.styled";
import Select from "./Select";
import { ButtonStyled } from "./Button.styled";

const BookForm = ({ bookId }) => {
	const [book, setBook] = useState({
		tittle: "",
		author: "",
		synopsis: "",
		systemEntryDate: "",
		image: "",
		genre: "",
	});

	const navigate = useNavigate();

	if (bookId) {
		const getBooks = async () => {
			const response = await fetch(`http://192.168.1.65:3000/books/${bookId}`);
			const json = await response.json();
			setBook(json);
		};
		React.useEffect(() => {
			getBooks();
		}, []);
	}

	const options = [
		{ text: "Fantasia", value: "Fantasia" },
		{ text: "Ação e Aventura", value: "Ação e Aventura" },
		{ text: "Horror", value: "Horror" },
		{ text: "Romance", value: "Romance" },
		{ text: "Ficção Cientifica", value: "Ficção Cientifica" },
		{ text: "Economia", value: "Economia" },
	];

	function ImgChange({ target }) {
		const getImg = target.files;
		if (getImg.length > 0) {
			const loadingImg = getImg[0];
			const readFile = new FileReader();
			readFile.readAsDataURL(loadingImg);
			readFile.onloadend = function (loadingImg) {
				const imgBase64 = loadingImg.target.result;
				setBook({ ...book, image: imgBase64 });
			};
		}
	}

	function handleOnChange(e) {
		const value = e.target.value;
		console.log(value);
		const name = e.target.name;
		setBook({ ...book, [name]: value });
	}

	function BookSubmit(e) {
		e.preventDefault();

		const bookData = {
			...book,
			id: uuidv4(),
			status: {
				isActive: true,
				description: "",
			},
			systemEntryDate: book.systemEntryDate.split("-").reverse().join("/"),
			rentHistory: [],
		};
		if (bookId) {
			const editBooks = async () => {
				await fetch(`http://192.168.1.65:3000/books/${bookId}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(bookData),
				});
			};
			editBooks().catch(console.error);
			backToLibrary();
		} else {
			const postBooks = async () => {
				await fetch("http://192.168.1.65:3000/books", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(bookData),
				});
			};
			postBooks().catch(console.error);
			backToHome();
		}
	}

	function backToHome() {
		navigate("/home");
	}
	function backToLibrary() {
		navigate("/biblioteca");
	}
	return (
		<FormStyles onSubmit={BookSubmit}>
			<DivMainInputs>
				<ImgPreview>
					{book.image ? (
						<>
							<img src={book.image} />
							<input type="file" name="img" id="img" onChange={ImgChange} />
							<Plus />
							<p>Capa</p>
						</>
					) : (
						<>
							<input type="file" name="img" id="img" onChange={ImgChange} />
							<Plus />
							<p>Capa</p>
						</>
					)}
				</ImgPreview>
				<InputContainer>
					<DivLeft>
						<Input
							type="text"
							name="tittle"
							placeholder="Título"
							forstyle="books"
							value={book.tittle}
							onChange={(e) => handleOnChange(e)}
						/>
						<div className="synopsis">
							<textarea
								name="synopsis"
								placeholder="Sinopse"
								id="synopsis"
								value={book.synopsis}
								onChange={(e) => handleOnChange(e)}
							></textarea>
							{/* <label htmlFor="synopsis">Sinopse</label> */}
						</div>
					</DivLeft>
					<DivRight>
						<Input
							type="text"
							name="author"
							placeholder="Autor"
							forstyle="books"
							value={book.author}
							onChange={(e) => handleOnChange(e)}
						/>
						<Select
							name="genre"
							options={options}
							value={book.genre}
							onChange={(e) => handleOnChange(e)}
							type="bookForm"
						/>

						<Input
							type="text"
							name="systemEntryDate"
							placeholder="Data de entrada"
							forstyle="books"
							value={book.systemEntryDate}
							onChange={(e) => handleOnChange(e)}
							onFocus={(e) => (e.target.type = "date")}
							onBlur={({ target }) => {
								if (!target.value) target.type = "text";
							}}
						/>
					</DivRight>
				</InputContainer>
			</DivMainInputs>
			<DivButtons>
				<ButtonStyled
					background="transparent"
					border="1px solid #133052"
					onClick={bookId ? backToLibrary : backToHome}
				>
					CANCELAR
				</ButtonStyled>
				<ButtonStyled width="143px">SALVAR</ButtonStyled>
			</DivButtons>
		</FormStyles>
	);
};

export default BookForm;
