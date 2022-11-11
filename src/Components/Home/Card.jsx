import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CardStyle, Icon, Text } from "./Card.styled";

const Card = ({ icon, text, address }) => {
	return (
		<Link to={address}>
			<CardStyle>
				<Icon>{icon}</Icon>
				<Text>{text}</Text>
			</CardStyle>
		</Link>
	);
};

export default Card;
