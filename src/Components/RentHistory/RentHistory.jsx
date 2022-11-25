import React, { useState } from "react";
import { MainContainer } from "../Main/Main.styled";
import Nav from "../Nav/Nav";
import { RentHistoryContainer } from "./RentHistory.styled";
import { ReactComponent as Filter } from "../../assets/modal/Filter.svg";
import Back from "../Main/Back";

const RentHistory = () => {
	const [books, setBooks] = useState([]);
	const [filteredBook, setFilteredBook] = React.useState([]);

	React.useEffect(() => {
		const getBooks = async () => {
			const response = await fetch("http://192.168.1.65:3000/books", {
				method: "GET",
			});
			const json = await response.json();
			setBooks(json.filter((book) => book.rentHistory.length > 0));
			setFilteredBook(json.filter((book) => book.rentHistory.length > 0));
		};
		getBooks().catch(console.error);
	}, []);
	function filterInput({ target }) {
		if (target.name == "tittle") {
			setFilteredBook(
				books.filter((book) =>
					book.tittle.toLowerCase().includes(target.value.toLowerCase())
				)
			);
		} else {
			setFilteredBook(
				books.map((book) => {
					const rentHistory = book.rentHistory.filter((rent) => {
						return rent[target.name]
							.toLowerCase()
							.includes(target.value.toLowerCase());
					});
					return { ...book, rentHistory };
				})
			);
		}
	}
	return (
		<MainContainer style={{ height: "100vh", overflowX: "hidden" }}>
			<Nav />
			<RentHistoryContainer>
				<Back link="/home" back="Home" current="Histórico de Empréstimos" />
				<table cellSpacing="0">
					<thead>
						<tr>
							<td>Aluno</td>
							<td>Turma</td>
							<td>Livro</td>
							<td>Data da Retirada</td>
							<td>Data da Entrega</td>
						</tr>
					</thead>
					<tbody>
						<tr className="inputTr">
							<td>
								<div>
									<Filter />
									<input type="text" name="studentName" onChange={filterInput} />
								</div>
							</td>
							<td>
								<div>
									<Filter />
									<input type="text" name="class" onChange={filterInput} />
								</div>
							</td>
							<td>
								<div>
									<Filter />
									<input type="text" name="tittle" onChange={filterInput} />
								</div>
							</td>
							<td>
								<div>
									<Filter />
									<input type="text" name="withdrawalDate" onChange={filterInput} />
								</div>
							</td>
							<td>
								<div>
									<Filter />
									<input type="text" name="deliveryDate" onChange={filterInput} />
								</div>
							</td>
						</tr>

						{filteredBook &&
							filteredBook.map((book) => {
								return book.rentHistory.map((rent, index) => {
									return (
										<tr key={index}>
											<td>{rent.studentName}</td>
											<td>{rent.class}</td>
											<td>{book.tittle}</td>
											<td>{rent.withdrawalDate}</td>
											<td>{rent.deliveryDate}</td>
										</tr>
									);
								});
							})}
					</tbody>
				</table>
			</RentHistoryContainer>
		</MainContainer>
	);
};

export default RentHistory;
