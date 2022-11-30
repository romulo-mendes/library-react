import React, { createContext, useContext, useMemo, useState } from "react";

const BooksContext = createContext({});

const BooksProvider = ({ children }) => {
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState("");
	const [books, setBooks] = useState([]);

	React.useEffect(() => {
		const getBooks = async () => {
			const response = await fetch("http://localhost:3000/books", {
				method: "GET",
			});
			const json = await response.json();
			setBooks(json);
		};
		getBooks().catch(console.error);
	}, []);
	const filteredBooks =
		search && category
			? books.filter((book) =>
					book[category].toLowerCase().includes(search.toLowerCase())
			  )
			: books;
	const providerData = useMemo(() => {
		return { search, setSearch, category, setCategory, filteredBooks };
	}, [search, setSearch, category, setCategory, filteredBooks]);
	return (
		<BooksContext.Provider value={providerData}>{children}</BooksContext.Provider>
	);
};
export const useBooks = () => {
	return useContext(BooksContext);
};
export default BooksProvider;
