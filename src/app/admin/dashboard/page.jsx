import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardStats from "@/components/organisms/DashboardStats";

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <DashboardStats />
    </DashboardLayout>
  );
}