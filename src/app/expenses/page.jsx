"use client";

import DashboardLayout from "@/layouts/DashboardLayout";
import ExpenseList from "@/components/organisms/ExpenseList";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

export default function ExpensesPage() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-10 space-y-10 animate-in fade-in slide-in-from-bottom-3 duration-700">
        {/* HEADER CON ACENTO DE ERROR (Rojo) */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-error rounded-full shadow-[0_0_15px_rgba(239,68,68,0.4)]" />
              <h1 className="text-3xl md:text-5xl font-black text-dark tracking-tighter italic uppercase">
                Mis <span className="text-error italic">Gastos</span>
              </h1>
            </div>
            <Text className="text-dark/30 text-[10px] font-black uppercase tracking-[0.4em] ml-5">
              Control de egresos y activos
            </Text>
          </div>

          <Button className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-[1.8rem] font-black uppercase italic text-xs tracking-widest hover:bg-error transition-all shadow-xl shadow-dark/10 active:scale-95 border-none cursor-pointer">
            Registrar Gasto -
          </Button>
        </header>

        {/* LISTADO DE GASTOS */}
        <div className="max-w-5xl">
          <ExpenseList />
        </div>
      </div>
    </DashboardLayout>
  );
}
