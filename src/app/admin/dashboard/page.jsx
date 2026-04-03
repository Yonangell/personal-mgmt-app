"use client";

import DashboardLayout from "@/layouts/DashboardLayout";
import Text from "@/components/atoms/Text";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";

const IconPlus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);
const IconUsers = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

export default function AdminDashboard() {
  const categorias = [
    "Alimentación",
    "Educación",
    "Entretenimiento",
    "Logística",
    "Ropa",
    "Salud",
    "Servicios",
    "Tecnología",
    "Transporte",
    "Viajes",
  ];

  return (
    <DashboardLayout>
      <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-12 animate-in fade-in duration-700">
        {/* TÍTULO DE SECCIÓN Y ACCIÓN RÁPIDA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tighter italic uppercase">
              Panel <span className="text-primary italic">Master</span>
            </h2>
            <Text className="text-dark/30 text-[10px] font-black uppercase tracking-[0.4em]">
              Gestión de Categorías Globales
            </Text>
          </div>

          <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-black uppercase italic text-[10px] tracking-widest transition-all shadow-xl active:scale-95 border-none flex items-center h-fit">
            <span className="mr-2">
              <IconPlus />
            </span>{" "}
            Nueva Categoría
          </Button>
        </div>

        {/* MÉTRICAS MAESTRAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white border-none p-8 rounded-[2.5rem] flex items-center gap-6 shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <IconUsers />
            </div>
            <div>
              <Text className="text-[10px] font-black uppercase text-dark/30 tracking-widest leading-none mb-1">
                Usuarios
              </Text>
              <Text className="text-4xl font-black italic tracking-tighter text-dark">
                1,284
              </Text>
            </div>
          </Card>

          <Card className="bg-dark border-none p-8 rounded-[2.5rem] flex items-center gap-6 shadow-2xl">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <div>
              <Text className="text-[10px] font-black uppercase text-dark/30 tracking-widest leading-none mb-1">
                Actividad
              </Text>
              <Text className="text-4xl font-black italic tracking-tighter text-dark">
                89%
              </Text>
            </div>
          </Card>

          <Card className="bg-white border-none p-8 rounded-[2.5rem] flex items-center gap-6 shadow-sm">
            <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
            </div>
            <div>
              <Text className="text-[10px] font-black uppercase text-dark/30 tracking-widest leading-none mb-1">
                Categorías
              </Text>
              <Text className="text-4xl font-black italic tracking-tighter text-dark">
                24
              </Text>
            </div>
          </Card>
        </div>

        {/* LISTADO DE CATEGORÍAS */}
        <Card className="bg-white border-none rounded-[3rem] p-10 shadow-sm">
          <Text className="text-2xl font-black italic tracking-tighter text-dark mb-8 uppercase">
            Categorías <span className="text-primary italic">Activas</span>
          </Text>

          {/* LISTADO DE CATEGORÍAS - FIX DE VISIBILIDAD */}
          {/* LISTADO DE CATEGORÍAS - TEST DE FUERZA BRUTA */}
          {/* LISTADO DE CATEGORÍAS - REFINADO PARA MÓVIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
            {categorias.map((cat) => (
              <div
                key={cat}
                className="flex items-center justify-between p-4 md:p-6 bg-slate-50 rounded-[1.5rem] md:rounded-[2rem] border border-transparent hover:border-primary/20 hover:bg-white transition-all group shadow-sm gap-3 h-20 md:h-24"
              >
                {/* TEXTO: Reducimos el tamaño en móvil para que quepa más */}
                <div className="flex-1 min-w-0">
                  <Text className="font-black italic text-dark group-hover:text-primary transition-colors uppercase text-[11px] md:text-base tracking-tighter md:tracking-tight truncate">
                    {cat}
                  </Text>
                </div>

                {/* ACCIONES: Más compactas en móvil */}
                <div className="flex gap-1.5 md:gap-2 shrink-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all">
                  <Button className="px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-slate-200 text-dark text-[7px] md:text-[9px] border-none font-black tracking-widest h-fit">
                    EDIT
                  </Button>
                  <Button className="px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-red-50 text-red-600 text-[7px] md:text-[9px] border-none font-black tracking-widest h-fit">
                    DEL
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
