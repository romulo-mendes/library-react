import React from "react";
import Input from "./Input";
import { ReactComponent as Plus } from "../../assets/Plus.svg";
import { useNavigate, useParams } from "react-router-dom";
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
import useStateBook from "../../Hooks/useStateBook";

const options = [
	{ text: "Fantasia", value: "Fantasia" },
	{ text: "Ação e Aventura", value: "Ação e Aventura" },
	{ text: "Horror", value: "Horror" },
	{ text: "Romance", value: "Romance" },
	{ text: "Ficção Cientifica", value: "Ficção Cientifica" },
	{ text: "Economia", value: "Economia" },
];

const BookForm = () => {
	const { bookId } = useParams();
	const [book, setBook] = useStateBook();

	const navigate = useNavigate();

	if (bookId) {
		const getBooks = async () => {
			const response = await fetch(`http://localhost:3000/books/${bookId}`);
			const json = await response.json();
			setBook(json);
		};
		React.useEffect(() => {
			getBooks();
		}, []);
	}

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
		const name = e.target.name;
		setBook({ ...book, [name]: value });
	}

	function BookSubmit(e) {
		e.preventDefault();

		const bookData = {
			...book,
			id: book.id || uuidv4(),
			status: book.status || {
				isActive: true,
				description: "",
			},
			systemEntryDate: book.systemEntryDate.split("-").reverse().join("/"),
			rentHistory: book.rentHistory || [],
		};
		handleOnSave(bookData);
	}

	function handleOnSave(bookData) {
		if (bookId) {
			const editBooks = async () => {
				await fetch(`http://localhost:3000/books/${bookId}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(bookData),
				});
			};
			editBooks().catch(console.error);
			return backToLibrary();
		}
		const postBooks = async () => {
			await fetch("http://localhost:3000/books", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(bookData),
			});
		};
		postBooks().catch(console.error);
		return backToHome();
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
					{book.image && <img src={book.image} />}
					<input type="file" name="img" id="img" onChange={ImgChange} />
					<Plus />
					<p>Capa</p>
				</ImgPreview>
				<InputContainer>
					<DivLeft>
						<Input
							type="text"
							name="tittle"
							label="Título"
							forstyle="books"
							value={book.tittle}
							onChange={(e) => handleOnChange(e)}
						/>
						<div className="synopsis">
							<textarea
								name="synopsis"
								id="synopsis"
								value={book.synopsis}
								onChange={(e) => handleOnChange(e)}
							></textarea>
							<label htmlFor="synopsis">Sinopse</label>
						</div>
					</DivLeft>
					<DivRight>
						<Input
							type="text"
							name="author"
							label="Autor"
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
							label="Gênero"
						/>

						<Input
							type="text"
							name="systemEntryDate"
							label="Data de entrada"
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
