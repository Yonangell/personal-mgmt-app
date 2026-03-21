import TaskItem from "@/components/molecules/TaskItem";
import Text from "@/components/atoms/Text";

export default function TaskList() {
  const tasks = [
    { id: 1, title: "Terminar proyecto", status: "Pendiente" },
    { id: 2, title: "Estudiar React", status: "Completado" },
  ];

  return (
    <div className="space-y-4">
     {/*<Text className="text-xl font-semibold">Mis Tareas</Text>*/}

      {tasks.map((task) => (
        <TaskItem key={task.id} title={task.title} status={task.status} />
      ))}
    </div>
  );
}
