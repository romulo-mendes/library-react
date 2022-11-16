import React from "react";
import Card from "./Card";
import { ReactComponent as Plus } from "../../assets/home/Plus.svg";
import { ReactComponent as Paste } from "../../assets/home/Paste.svg";
import { ReactComponent as Book } from "../../assets/home/Book.svg";
import { HomeContainer } from "./Home.styled";
import Nav from "../Nav/Nav";
import { MainContainer } from "../Main/Main.styled";

const Home = () => {
	return (
		<MainContainer>
			<Nav />
			<HomeContainer>
				<Card icon={<Plus />} text={"Cadastrar novo livro"} address={"/cadastro"} />
				<Card icon={<Book />} text={"Biblioteca"} address={"/biblioteca"} />
				<Card
					icon={<Paste />}
					text={"Histórico de empréstimos"}
					address={"/historico"}
				/>
			</HomeContainer>
		</MainContainer>
	);
};

export default Home;
