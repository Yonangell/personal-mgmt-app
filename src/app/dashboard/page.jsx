import MainLayout from "@/layouts/MainLayout";
import DashboardStats from "@/components/organisms/DashboardStats";

export default function DashboardPage() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">DashBoard</h1>
      <DashboardStats />
    </MainLayout>
  );
}
