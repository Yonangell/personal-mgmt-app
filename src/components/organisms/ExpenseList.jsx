import Expense from "@/molecules/Expense";
import Text from "@/atoms/Text";

export default function ExpenseList() {
  const expenses = [
    { id: 1, title: "Supermercado", amount: 50, category: "Comida" },
    { id: 2, title: "Uber", amount: 15, category: "Transporte" },
  ];

  return (
    <div className="space-y-4">
      <Text className="text-xl font-semibold">Mis Gastos</Text>

      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          category={expense.category}
        />
      ))}
    </div>
  );
}
