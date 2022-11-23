import React from 'react'
import Input from '../Form/Input'

const RentHistoryModal = () => {
  return (
    <div>
      <h2>Histórico de empréstimos do livro</h2>
      <table>
        <thead>
          <th>
            <td>Aluno</td>
            <td>Turma</td>
            <td>Data da Retirada</td>
            <td>Data da Entrega</td>
          </th>
          <th>
            <td><Input type="text" forstyle="table" name="studentName" /></td>
          </th>
        </thead>
      </table>
    </div>
  )
}

export default RentHistoryModal