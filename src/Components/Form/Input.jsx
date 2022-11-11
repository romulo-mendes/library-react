import React from "react";
import { DivInput } from "./Input.styled";

const Input = ({
	type,
	label,
	name,
	value,
	onChange,
	error,
	onBlur,
	placeholder,
	...props
}) => {
	return (
		<DivInput type="login">
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				placeholder={error ? `${error} com o ${name}` : placeholder}
				id={name}
				onChange={onChange}
				value={value}
				onBlur={onBlur}
			/>
		</DivInput>
	);
};

export default Input;
