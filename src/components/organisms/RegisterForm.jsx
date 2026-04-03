"use client";

import InputField from "@/components/molecules/InputField";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";

export default function RegisterForm() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <div className="space-y-4">
        <InputField label="Nombre de Usuario" placeholder="Ej. Yonangell" />
        <InputField label="Correo Electrónico" placeholder="correo@email.com" />
        <InputField
          label="Establecer Contraseña"
          type="password"
          placeholder="••••••••"
        />
      </div>

      <Button className="w-full py-5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-dark shadow-xl shadow-primary/20 border-none mt-2 transition-all active:scale-95">
        Crear Cuenta Pro
      </Button>
    </div>
  );
}
