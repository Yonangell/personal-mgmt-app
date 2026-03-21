import Label from "@/components/atoms/Label";
import Text from "@/components/atoms/Text";
import Input from "@/components/atoms/Input";

export default function InpuField({
  label,
  type = "text",
  placeholder,
  error,
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder}></Input>
      {error && <Text className="text-sm text-red-500">{error}</Text>}
    </div>
  );
}
