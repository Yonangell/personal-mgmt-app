import DashboardLayout from "@/layouts/DashboardLayout";
import UsersTable from "@/components/organisms/UsersTable";

export default function Users() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">
        Gestión de Usuarios
      </h1>

      <UsersTable />
    </DashboardLayout>
  );
}