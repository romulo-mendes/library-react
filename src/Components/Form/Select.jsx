import React from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
	select {
		width: 260px;
		padding: 16px;
		border: 1px solid #adb5db;
		outline: 0;
		border-radius: 5px;
		:focus {
			outline: 2px solid #3e4756;
		}
		@media (max-width: 355px) {
			width: 100%;
		}
	}
	${(props) =>
		props.type === "bookForm" &&
		`
			select {
				width: 100%;
				border: 1px solid #133052;
				color: #133052;

			}
		`}
`;

const Select = ({ value, onChange, options, type, name, label = "Selecione" }) => {
	return (
		<SelectContainer type={type}>
			<select onChange={onChange} value={value} name={name}>
				<option value="" disabled>
					{label}
				</option>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.text}
					</option>
				))}
			</select>
		</SelectContainer>
	);
};

export default Select;
