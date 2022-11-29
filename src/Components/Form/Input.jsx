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
			<input
				className="input"
				type={type}
				name={name}
				placeholder={placeholder}
				id={name}
				onChange={onChange}
				value={value}
				onBlur={onBlur}
				onFocus={onFocus}
			/>
			<label className="label" htmlFor={name}>
				{label}
			</label>
		</DivInput>
	);
};

export default Input;
