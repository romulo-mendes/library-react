import React from "react";
import { RentHistory } from "./RentTable.styled";

const RentTable = ({ lastRent }) => {
	const { studentName, class: clazz, withdrawalDate, deliveryDate } = lastRent;
	return (
		<RentHistory>
			<h2>Dados do aluno</h2>
			<table cellSpacing={10}>
				<thead>
					<tr>
						<td>Nome</td>
						<td>Turma</td>
						<td>Retirada</td>
						<td>Entrega</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{studentName}</td>
						<td>{clazz}</td>
						<td>{withdrawalDate}</td>
						<td>{deliveryDate}</td>
					</tr>
				</tbody>
			</table>
		</RentHistory>
	);
};

export default RentTable;
