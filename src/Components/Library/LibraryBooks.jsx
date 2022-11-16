import React from "react";
import LibraryCard from "./LibraryCard";

const LibraryBooks = () => {
	const [books, setBooks] = React.useState([{}]);

	React.useEffect(() => {
		const getUsers = async () => {
			const response = await fetch("http://192.168.1.65:3000/books", {
				method: "GET",
			});
			const json = await response.json();
			setBooks(json);
			console.log(json);
		};
		getUsers().catch(console.error);
	}, []);
	return (
		<div>
			{
				<LibraryCard
					id={books[0].tittle}
					tittle={books[0].tittle}
					img={books[0].image}
				/>
			}
		</div>
	);
};

export default LibraryBooks;
