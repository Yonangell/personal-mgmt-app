import Label from "@/atoms/Label";
import Text from "@/atoms/Text";
import Input from "@/atoms/Input";

export default function InpuField({
  laber,
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
