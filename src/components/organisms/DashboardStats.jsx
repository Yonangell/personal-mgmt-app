import Card from "@/components/atoms/Card";
import Text from "@/components/atoms/Text";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <Text className="text-sm">Tareas</Text>
        <Text className="text-xl font-bold">12</Text>
      </Card>

      <Card>
        <Text className="text-sm">Notas</Text>
        <Text className="text-xl font-bold">8</Text>
      </Card>

      <Card>
        <Text className="text-sm">Gastos</Text>
        <Text className="text-xl font-bold">$320</Text>
      </Card>
    </div>
  );
}
