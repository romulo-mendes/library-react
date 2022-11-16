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
	forstyle,
	...props
}) => {
	return (
		<DivInput type={forstyle}>
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				placeholder={error ? `${error} com o ${name}` : placeholder}
				id={name}
				onChange={onChange}
				value={value}
				onBlur={onBlur}
				forstyle={forstyle}
			/>
		</DivInput>
	);
};

export default Input;
