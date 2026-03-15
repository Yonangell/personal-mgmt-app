import Text from "@/atoms/Text";
import Avatar from "@/atoms/Avatar";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <Text className="text-lg font-bold">Gestión Personal</Text>

      <Avatar src="https://i.pravatar.cc/40" />
    </nav>
  );
}
