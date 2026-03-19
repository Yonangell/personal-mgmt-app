import Text from "@/components/atoms/Text";
import Avatar from "@/components/atoms/Avatar";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <Text className="text-lg font-bold">Gestión Personal</Text>

      <Avatar />
    </nav>
  );
}
