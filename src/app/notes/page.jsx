import DashboardLayout from "@/layouts/DashboardLayout";
import NoteList from "@/components/organisms/NotesList";

export default function Notes() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Mis Notas</h1>
      <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
        <NoteList />
      </div>
    </DashboardLayout>
  );
}
