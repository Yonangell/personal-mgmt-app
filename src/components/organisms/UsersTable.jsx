import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

export default function UsersTable() {
  const users = [
    { id: 1, name: "Juan", email: "juan@email.com" },
    { id: 2, name: "Maria", email: "maria@email.com" },
  ];

  return (
    <div className="overflow-x-auto">
      <Text className="text-xl font-semibold">Usuarios</Text>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Nombre</th>
            <th className="p-2">Email</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>

              <td className="p-2 flex gap-2">
                <Button>Bloquear</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
