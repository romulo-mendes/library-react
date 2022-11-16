import React from "react";

const LibraryCard = ({ img, id, tittle }) => {
	return (
		<div key={id}>
			<img src={img} alt={`capa do livro ${tittle}`} />
			<h6>{tittle}</h6>
		</div>
	);
};

export default LibraryCard;
