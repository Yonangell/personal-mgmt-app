import ExpenseItem from "@/components/molecules/ExpenseItem";
import Text from "@/components/atoms/Text";

export default function ExpenseList() {
  const expenses = [
    { id: 1, title: "Supermercado", amount: 50, category: "Comida" },
    { id: 2, title: "Uber", amount: 15, category: "Transporte" },
  ];

  return (
    <div className="space-y-4">
      <Text className="text-xl font-semibold">Mis Gastos</Text>

      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          category={expense.category}
        />
      ))}
    </div>
  );
}
