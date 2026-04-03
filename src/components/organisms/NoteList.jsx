"use client";

import NoteItem from "@/components/molecules/NoteItem";
import Text from "@/components/atoms/Text";

export default function NoteList() {
  const notes = [
    {
      id: 1,
      title: "Arquitectura de Plataforma",
      content:
        "Implementar el sistema de gestión personal con enfoque en automatización industrial y PLC.",
    },
    {
      id: 2,
      title: "Protocolo de Diseño",
      content:
        "Uso de itálicas, pesos negros y bordes redondeados de 2.5rem para toda la interfaz.",
    },
    {
      id: 3,
      title: "Próximo Sprint",
      content:
        "Refactorizar la sección de gastos y mejorar la identidad del perfil del ingeniero.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="px-4">
        <Text className="text-[10px] font-black uppercase tracking-[0.4em] text-dark/20">
          Archivo de Ideas ({notes.length})
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <NoteItem key={note.id} title={note.title} content={note.content} />
        ))}
      </div>
    </div>
  );
}
