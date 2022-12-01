import { useState } from "react";

const useStateBook = () => {
	const [book, setBook] = useState({
		tittle: "",
		author: "",
		synopsis: "",
		systemEntryDate: "",
		image: "",
		genre: "",
		status: [],
		rentHistory: [],
	});
	return [book, setBook];
};

export default useStateBook;
