import DashboardLayout from "@/layouts/DashboardLayout";
import ExpenseList from "@/components/organisms/ExpenseList";

export default function Expenses() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Mis Gastos</h1>
      <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
        <ExpenseList />
      </div>
    </DashboardLayout>
  );
}
