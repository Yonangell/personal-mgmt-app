import InputField from "@/components/molecules/InputField";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";

export default function LoginForm() {
  return (
    <div className="space-y-4">
      <Text className="text-xl font-semibold">Iniciar Sesión</Text>

      <InputField label="Correo" placeholder="correo@email.com" />

      <InputField label="Contraseña" type="password" placeholder="********" />

      <Button>Iniciar sesión</Button>
    </div>
  );
}
