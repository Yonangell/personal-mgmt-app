import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import Card from "@/components/atoms/Card";

export default function TaskItem({ title, status }) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <Text className="font-semibold">{title}</Text>
        <Badge>{status}</Badge>
      </div>
      <div className="flex gap-2 mt-3">
        <Button>Editar</Button>
        <Button>Eliminar</Button>
      </div>
    </Card>
  );
}
