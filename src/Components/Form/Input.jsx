import React from "react";
import { DivInput } from "./Input.styled";

const Input = ({
	type,
	label,
	name,
	value,
	onChange,
	onBlur,
	placeholder,
	forstyle,
	onFocus,
}) => {
	return (
		<DivInput type={forstyle}>
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				id={name}
				onChange={onChange}
				value={value}
				onBlur={onBlur}
				forstyle={forstyle}
				onFocus={onFocus}
			/>
		</DivInput>
	);
};

export default Input;
