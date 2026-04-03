"use client";

import TaskList from "@/components/organisms/TaskList";
import DashboardLayout from "@/layouts/DashboardLayout";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import { motion } from "framer-motion";

export default function TasksPage() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-10 space-y-10 animate-in fade-in slide-in-from-bottom-3 duration-500">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-primary rounded-full shadow-[0_0_15px_rgba(0,112,243,0.3)]" />
              <Text className="text-3xl md:text-4xl font-black text-dark tracking-tighter italic uppercase">
                Gestión de <span className="text-primary italic">Tareas</span>
              </Text>
            </div>
            <Text className="text-dark/30 text-[10px] font-black uppercase tracking-[0.4em] ml-5">
              Optimización de flujo de trabajo
            </Text>
          </div>

          <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-[1.5rem] font-black uppercase italic text-xs tracking-widest hover:bg-primary transition-all shadow-xl shadow-dark/10 active:scale-95 border-none cursor-pointer">
            Nueva Tarea +
          </Button>
        </header>

        <div className="max-w-4xl">
          <TaskList />
        </div>
      </div>
    </DashboardLayout>
  );
}
