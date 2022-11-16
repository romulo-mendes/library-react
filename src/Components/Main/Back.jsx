import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/ArrowLeft.svg";
import styled from "styled-components";

const BackStyled = styled.div`
	display: flex;
	gap: 8px;
	position: absolute;
	left: 0;
	top: 0;
	margin: 24px;
	align-items: center;
	p {
		font-size: 20px;
		color: #00000080;
		font-weight: bold;
	}
	span {
		color: #000000;
	}
`;

const Back = ({ link, back, current }) => {
	return (
		<Link to={link}>
			<BackStyled>
				<Arrow />
				<p>
					{back}
					<span> / {current}</span>
				</p>
			</BackStyled>
		</Link>
	);
};

export default Back;
