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
	}
`;

const Select = ({ value, onChange, options }) => {
	return (
		<SelectContainer>
			<select value={value} onChange={onChange}>
				<option value="" disabled>
					Selecione
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
