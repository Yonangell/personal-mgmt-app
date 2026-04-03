"use client";

import ExpenseItem from "@/components/molecules/ExpenseItem";
import Text from "@/components/atoms/Text";

export default function ExpenseList() {
  // Datos de prueba
  const expenses = [
    {
      id: 1,
      title: "Suscripción Copilot AI",
      amount: 10,
      category: "Software",
    },
    {
      id: 2,
      title: "Hardware PLC - Sensores",
      amount: 85,
      category: "Ingeniería",
    },
    { id: 3, title: "Almuerzo de Equipo", amount: 32, category: "Comida" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between px-5">
        <Text className="text-[10px] font-black uppercase tracking-[0.4em] text-dark/20">
          Flujo de Caja ({expenses.length})
        </Text>
        <div className="h-[1px] flex-1 bg-light mx-4 opacity-50" />
        <Text className="text-[10px] font-black uppercase tracking-[0.2em] text-error italic">
          Total: -$127.00
        </Text>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </div>
    </div>
  );
}
