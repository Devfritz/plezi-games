interface ExpenseProps {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  allExpense: ExpenseProps[];
  onDelete: (id: number) => void;
}

const ListExpenses = ({ allExpense, onDelete }: Props) => {
  if (allExpense.length === 0) return null;
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {allExpense.map((exp) => {
          return (
            <tr key={exp.id}>
              <td>{exp.description}</td>
              <td>{exp.amount}</td>
              <td>{exp.category}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(exp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td>
            ${allExpense.reduce((acc, exp) => acc + exp.amount, 0).toFixed(2)}
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ListExpenses;
