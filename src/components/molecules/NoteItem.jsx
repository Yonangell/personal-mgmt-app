import Card from "@/components/atoms/Card";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

export default function NoteItem({ title, content }) {
  return (
    <Card>
      <Text className="font-semibold">{title}</Text>

      <Text className="text-sm mt-2">{content}</Text>

      <div className="flex gap-2 mt-3">
        <Button>Editar</Button>
        <Button>Eliminar</Button>
      </div>
    </Card>
  );
}
