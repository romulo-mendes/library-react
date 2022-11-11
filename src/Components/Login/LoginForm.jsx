import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Library } from "../../assets/Logo.svg";
import useForm from "../../Hooks/useForm";
import Input from "../Form/Input";
import { DivLogin, DivLoginProps } from "./LoginForm.styled";

const LoginForm = () => {
	const [data, setData] = React.useState(null);
	const [error, setError] = React.useState(false);
	const email = useForm();
	const password = useForm();
	const navigate = useNavigate();

	React.useEffect(() => {
		const getUsers = async () => {
			const response = await fetch("http://192.168.1.65:3000/login", {
				method: "GET",
			});
			const json = await response.json();
			setData(json);
		};
		getUsers().catch(console.error);
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		setError(false);
		data.map((user) => {
			if (user.email === email.value && user.password === password.value) {
				window.localStorage.setItem("email", email.value);
				navigate("/home");
			} else {
				setError(true);
			}
		});
	}

	return (
		<DivLogin>
			<form onSubmit={handleSubmit}>
				<DivLoginProps marginBottom="56">
					<Library />
				</DivLoginProps>
				<Input
					type="email"
					id="email"
					name="email"
					placeholder="E-mail"
					{...email}
				/>
				<Input
					type="password"
					id="password"
					name="password"
					placeholder="Senha"
					{...password}
				/>
				<DivLoginProps marginBottom="32" textAlign="flex-start">
					<Link to="/lostpassword">Esqueci minha senha</Link>
				</DivLoginProps>
				<button>ENTRAR</button>
				{error && (
					<p style={{ color: "red", fontSize: "12px", padding: "3px" }}>
						Usuário ou senha inválido
					</p>
				)}
			</form>
		</DivLogin>
	);
};

export default LoginForm;
