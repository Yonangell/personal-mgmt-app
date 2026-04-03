"use client";

import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardStats from "@/components/organisms/DashboardStats";
import Text from "@/components/atoms/Text";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-10 space-y-10 animate-in fade-in slide-in-from-bottom-3 duration-500">
        <header className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-primary rounded-full" />
            <Text className="text-3xl md:text-4xl font-black text-dark tracking-tighter italic uppercase">
              Resumen <span className="text-primary">General</span>
            </Text>
          </div>
          <Text className="text-dark/30 text-[10px] font-black uppercase tracking-[0.4em] ml-5">
            Ecosistema de Gestión Personal
          </Text>
        </header>

        <section className="relative">
          <DashboardStats />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-dark rounded-[2.5rem] p-10 text-slate-900 shadow-2xl shadow-dark/20 relative overflow-hidden group border border-white/5">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-12 transition-transform duration-1000 pointer-events-none select-none">
              <span className="text-[14rem] font-black italic">ME</span>
            </div>

            <div className="relative z-10">
              <Text className="text-2xl font-black italic mb-2 text-black">
                Bienvenido,{" "}
                <span className="text-primary italic">Yonangell</span>
              </Text>
              <Text className="text-black/50 text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed max-w-md">
                Tu plataforma está optimizada. Los módulos de Tareas y Gastos
                están sincronizados con la nube.
              </Text>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-2 text-black/50">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-dark bg-light/10 flex items-center justify-center text-[10px] font-black italic"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <Text className="text-[9px] font-black text-black/50 uppercase tracking-widest">
                  Sistemas Activos
                </Text>
              </div>
            </div>
          </div>

          <div className="bg-white border border-light rounded-[2.5rem] p-8 shadow-sm flex flex-col">
            <Text className="text-sm font-black text-dark italic uppercase tracking-tighter mb-8 pb-2 border-b-4 border-primary w-fit">
              Próximos Pasos
            </Text>

            <div className="space-y-6 flex-grow">
              {[
                { t: "Cargar Datos Reales", h: "Pendiente", s: "API" },
                { t: "Testear Webhooks", h: "18:00 PM", s: "PRO" },
                { t: "Revisión Estética", h: "Finalizado", s: "ME" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between group cursor-default"
                >
                  <div className="flex flex-col">
                    <Text className="text-xs font-black text-dark italic leading-none group-hover:text-primary transition-colors">
                      {item.t}
                    </Text>
                    <Text className="text-[9px] font-bold text-dark/30 uppercase mt-1.5 tracking-widest">
                      {item.h}
                    </Text>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-light/50 flex items-center justify-center text-[8px] font-black text-dark/20 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                    {item.s}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
