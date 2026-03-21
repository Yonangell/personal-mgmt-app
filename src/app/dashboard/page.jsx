import DashboardLayout from "@/layouts/DashboardLayout"; // Cambiamos a DashboardLayout
import DashboardStats from "@/components/organisms/DashboardStats";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
        <DashboardStats />
      </div>
    </DashboardLayout>
  );
}