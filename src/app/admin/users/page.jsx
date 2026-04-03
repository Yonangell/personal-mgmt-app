import DashboardLayout from "@/layouts/DashboardLayout";
import UsersTable from "@/components/organisms/UsersTable";
import Text from "@/components/atoms/Text";

export default function Users() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-700">
        <div className="space-y-1">
          <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tighter italic uppercase">
            Gestión D<span className="text-primary italic">E Usuarios</span>
          </h2>
          <Text className="text-dark/30 text-[10px] font-black uppercase tracking-[0.4em]">
            Control de Acceso y Membresías PRO
          </Text>
        </div>

        <UsersTable />
      </div>
    </DashboardLayout>
  );
}
