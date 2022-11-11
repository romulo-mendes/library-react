import styled from "styled-components";
import background from "../../assets/login/backgroundlogin1x.png";

export const DivLoginProps = styled.div`
	margin-bottom: ${(props) => `${props.marginBottom}`}px;
	align-self: ${(props) => `${props.textAlign}`};
	${(props) =>
		props.textAlign &&
		`
  font-weight: bold;
  text-decoration: underline;
  font-size: 14px;

  `}
`;
export const DivLogin = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: url(${background}) no-repeat;
	background-position: center bottom;
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #fff;
		padding: 56px 40px;
		border-radius: 8px;
		width: 433px;
		height: 446px;
		button {
			background-color: #ffc501;
			border: none;
			border-radius: 4px;
			font-weight: bolder;
			font-size: 16px;
			width: 100%;
			padding: 12px;
			cursor: pointer;
		}
	}
`;
