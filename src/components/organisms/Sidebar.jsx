import Text from "@/components/atoms/Text";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white shadow p-4">
      <nav className="flex flex-col gap-4">
        <Text className="cursor-pointer hover:text-primary">Panel</Text>

        <Text className="cursor-pointer hover:text-primary">Tareas</Text>

        <Text className="cursor-pointer hover:text-primary">Notas</Text>

        <Text className="cursor-pointer hover:text-primary">Gastos</Text>
      </nav>
    </aside>
  );
}
