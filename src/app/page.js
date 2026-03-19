import DashboardStats from "@/components/organisms/DashboardStats"
import TaskList from "@/components/organisms/TaskList"
import MainLayout from "@/layouts/MainLayout";
import ExpenseList from "@/components/organisms/ExpenseList";
import NoteList from "@/components/organisms/NotesList";

export default function Home() {
  return (
    <MainLayout>
      {/*<h1 className="text-2xl font-bold mt-6 text-red-500"></h1>*/} 
      <DashboardStats />
      <div className="mt-8">
        <NoteList />
      </div>
    </MainLayout>
  );
}
