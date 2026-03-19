import NoteItem from "@/components/molecules/NoteItem";
import Text from "@/components/atoms/Text";

export default function NoteList() {
  const notes = [
    {
      id: 1,
      title: "Idea de proyecto",
      content: "Crear app de gestión personal",
    },
    { id: 2, title: "Recordatorio", content: "Estudiar Next.js" },
  ];

  return (
    <div className="space-y-4">
      <Text className="text-xl font-semibold">Mis Notas</Text>

      {notes.map((note) => (
        <NoteItem key={note.id} title={note.title} content={note.content} />
      ))}
    </div>
  );
}
