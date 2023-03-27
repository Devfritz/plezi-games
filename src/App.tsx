import { useState } from "react";
import ExpenseFilter from "./components/expenses/ExpenseFilter";
import ListExpenses from "./components/expenses/ListExpenses";
import { ExpenseForm } from "./components/expenses/ExpenseForm";

// import Form from "./components/Form";
// import ListGroup from "./components/Listgroup";

function App() {
  const expenses = [
    {
      id: 1,
      description: "Expenses for phones",
      amount: 10000,
      category: "business",
    },
    {
      id: 2,
      description: "Expenses for shoes",
      amount: 1000,
      category: "business",
    },
    {
      id: 3,
      description: "Expenses for restaurants",
      amount: 500,
      category: "food",
    },
  ];
  const [allExpenses, setAllExpenses] = useState(expenses);
  const [onSelected, setOnSelected] = useState("");

  const showByCategories = onSelected
    ? allExpenses.filter((exp) => exp.category === onSelected)
    : allExpenses;

  return (
    <>
      <ExpenseForm
        onSubmit={(expense) =>
          setAllExpenses([
            ...allExpenses,
            { ...expense, id: allExpenses.length + 1 },
          ])
        }
      />
      <ExpenseFilter onSelected={(category) => setOnSelected(category)} />
      <ListExpenses
        allExpense={showByCategories}
        onDelete={(id) =>
          setAllExpenses(allExpenses.filter((exp) => exp.id !== id))
        }
      />
    </>
  );
}

export default App;
