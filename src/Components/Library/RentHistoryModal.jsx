import React from "react";
import { CloseModalIcon } from "./ModalBook.styled";
import { ReactComponent as Close } from "../../assets/modal/Close.svg";
import { ReactComponent as Filter } from "../../assets/modal/Filter.svg";
import { ContainerRentHistoryModal } from "./RentHistoryModal.styled";



const RentHistoryModal = ({ rentHistory, setHistoryModal, setMainModal }) => {
	const [filteredRent, setFilteredRent] = React.useState(rentHistory);
	function closeModal() {
		setMainModal(true);
		setHistoryModal(false);
	}

	function filterInput({ target }) {
		setFilteredRent(
			rentHistory.filter((rent) =>
				rent[target.name].toLowerCase().includes(target.value.toLowerCase())
			)
		);
	}

	return (
		<ContainerRentHistoryModal>
			<CloseModalIcon onClick={closeModal}>
				<Close />
			</CloseModalIcon>
			<h2>Histórico de empréstimos do livro</h2>
			<table cellSpacing="0">
				<thead>
					<tr>
						<td>Aluno</td>
						<td>Turma</td>
						<td>Data da Retirada</td>
						<td>Data da Entrega</td>
					</tr>
				</thead>
				<tbody>
					<tr className="inputTr">
						<td>
							<div>
								<Filter />
								<input type="text" name="studentName" onChange={filterInput} />
							</div>
						</td>
						<td>
							<div>
								<Filter />
								<input type="text" name="class" onChange={filterInput} />
							</div>
						</td>
						<td>
							<div>
								<Filter />
								<input type="text" name="withdrawalDate" onChange={filterInput} />
							</div>
						</td>
						<td>
							<div>
								<Filter />
								<input type="text" name="deliveryDate" onChange={filterInput} />
							</div>
						</td>
					</tr>

					{filteredRent &&
						filteredRent.map((rent, index) => {
							return (
								<tr key={index}>
									<td>{rent.studentName}</td>
									<td>{rent.class}</td>
									<td>{rent.withdrawalDate}</td>
									<td>{rent.deliveryDate}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</ContainerRentHistoryModal>
	);
};

export default RentHistoryModal;
