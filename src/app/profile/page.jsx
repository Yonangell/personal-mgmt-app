"use client";

import DashboardLayout from "@/layouts/DashboardLayout";
import Avatar from "@/components/atoms/Avatar";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import InputField from "@/components/molecules/InputField";
import { user } from "@/lib/user";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-10 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-10">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-primary rounded-full shadow-[0_0_15px_rgba(0,112,243,0.3)]" />
              <h1 className="text-3xl md:text-5xl font-black text-dark tracking-tighter italic uppercase">
                Mi <span className="text-primary italic">Perfil</span>
              </h1>
            </div>
            <Text className="text-dark/30 text-[10px] font-black uppercase tracking-[0.4em] ml-5">
              Protocolo de configuración de usuario
            </Text>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white border-light rounded-[2.5rem] p-8 text-center shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 bg-slate-50 -z-10" />

              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Avatar
                    name={user.name}
                    src="/assets/image/graduacion.png" // <--- URL de la foto
                    className="w-32 h-32 border-8 border-white shadow-2xl rounded-[2.5rem]"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white w-10 h-10 rounded-2xl flex items-center justify-center border-4 border-white cursor-pointer hover:scale-110 transition-transform">
                    ✎
                  </div>
                </div>
              </div>

              <Text className="text-2xl font-black italic tracking-tighter text-dark">
                {user.name}
              </Text>
              <Text className="text-[10px] font-black uppercase tracking-widest text-dark/30 mt-1">
                {user.role}
              </Text>

              <div className="mt-6 flex justify-center">
                <span className="bg-primary/10 text-primary text-[9px] font-black px-4 py-2 rounded-2xl uppercase tracking-tighter italic border border-primary/10">
                  Plan {user.plan} de Élite
                </span>
              </div>
            </Card>

            <Card className="bg-dark rounded-[2.5rem] p-8 shadow-2xl shadow-dark/20 relative overflow-hidden group border-none">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />

              <Text className="text-[10px] font-black uppercase tracking-[0.3em] text-dark/30 mb-6 block">
                Métricas de Rendimiento
              </Text>

              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-white/5 pb-4">
                  <Text className="text-xs text-dark/50 font-bold uppercase tracking-tight">
                    Tareas listas
                  </Text>
                  <Text className="text-2xl font-black italic tracking-tighter text-primary">
                    124
                  </Text>
                </div>
                <div className="flex justify-between items-end">
                  <Text className="text-xs text-dark/50 font-bold uppercase tracking-tight">
                    Racha de fuego
                  </Text>
                  <Text className="text-2xl font-black italic tracking-tighter text-dark">
                    5 Días
                  </Text>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-white border-light rounded-[2.5rem] p-8 md:p-12 shadow-sm h-full">
              <Text className="text-xl font-black italic tracking-tighter text-dark mb-10 uppercase border-b border-light pb-6">
                Datos del <span className="text-primary italic">Usuario</span>
              </Text>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputField
                    label="Nombre"
                    defaultValue={user.name}
                    placeholder="Ej. Yonangell"
                  />

                  <InputField
                    label="Email"
                    type="email"
                    defaultValue="yonangell@me-platform.com"
                    placeholder="email@ejemplo.com"
                  />

                  <InputField
                    label="Rol"
                    defaultValue={user.role}
                    placeholder="Ej. Software Developer"
                  />

                  <InputField
                    label="Ubicación"
                    defaultValue="Caracas, VZLA"
                    placeholder="Ciudad, País"
                  />
                </div>

                <div className="pt-8 border-t border-light flex justify-end">
                  <Button
                    type="button"
                    className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white px-12 py-5 rounded-[1.8rem] font-black uppercase italic text-xs tracking-[0.2em] hover:bg-primary transition-all shadow-xl shadow-dark/10 active:scale-95 border-none"
                  >
                    Actualizar Protocolo
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
