import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
	background: #f4f4f4;
	height: 100%;
	width: 100vw;
`;

export const AnimDown = keyframes`
	from{ opacity: 0; transform: translateY(-50px);}
	to{opacity:1; transform: initial}
`;
