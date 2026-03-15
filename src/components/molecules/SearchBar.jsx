import Input from "@/atoms/Input";
import Icon from "@/atoms/Icon";

export default function SearchBar({ placeholder = "Buscar..." }) {
  return (
    <div className="flex items-center gap-2 rounded-md border boder-gray-300 px-3 py-2">
      <Icon></Icon>
      <Input
        type="text"
        placeholder={placeholder}
        className="border-none focus:ring-0"
      ></Input>
    </div>
  );
}
