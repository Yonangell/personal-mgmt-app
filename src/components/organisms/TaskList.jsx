"use client";

import TaskItem from "@/components/molecules/TaskItem";
import Text from "@/components/atoms/Text";

export default function TaskList() {
  const tasks = [
    { id: 1, title: "Sincronizar API Enterprise", status: "Pendiente" },
    { id: 2, title: "Refactorizar Componentes Atómicos", status: "Completado" },
    { id: 3, title: "Optimizar Base de Datos PLC", status: "Pendiente" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2 px-4">
        <Text className="text-[10px] font-black uppercase tracking-[0.4em] text-dark/30">
          Listado de Ejecución ({tasks.length})
        </Text>
        <button className="text-[10px] font-black text-primary italic uppercase hover:underline cursor-pointer">
          Limpiar Completados
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskItem key={task.id} title={task.title} status={task.status} />
        ))}
      </div>
    </div>
  );
}
