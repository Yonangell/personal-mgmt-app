import MainLayout from "@/layouts/MainLayout";
import TaskList from "@/components/organisms/TaskList";

export default function TasksPage() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6"></h1>
      My Tasks
      <TaskList />
    </MainLayout>
  );
}
