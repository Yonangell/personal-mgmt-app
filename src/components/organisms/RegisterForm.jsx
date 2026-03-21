import InputField from "@/components/molecules/InputField";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";

export default function RegisterForm() {
  return (
    <div className="space-y-4">
      <Text className="text-xl font-semibold">Crear Cuenta</Text>

      <InputField label="Nombre" placeholder="Tu nombre" />

      <InputField label="Correo" placeholder="correo@email.com" />

      <InputField label="Contraseña" type="password" placeholder="********" />

      <Button>Registrarse</Button>
    </div>
  );
}
