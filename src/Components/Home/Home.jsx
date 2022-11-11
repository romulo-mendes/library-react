import React from "react";
import Card from "./Card";
import { ReactComponent as Plus } from "../../assets/home/Plus.svg";
import { ReactComponent as Paste } from "../../assets/home/Paste.svg";
import { ReactComponent as Book } from "../../assets/home/Book.svg";
import { HomeContainer } from "./Home.styled";

const Home = () => {
	return (
		<HomeContainer>
			<Card icon={<Plus />} text={"Cadastrar novo livro"} address={"/cadastro"} />
			<Card icon={<Book />} text={"Biblioteca"} address={"/biblioteca"}/>
			<Card icon={<Paste />} text={"Histórico de empréstimos"} address={"/historico"}/>
		</HomeContainer>
	);
};

export default Home;
