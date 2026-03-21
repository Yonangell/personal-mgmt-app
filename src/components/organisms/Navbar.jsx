"use client";

import Avatar from "@/components/atoms/Avatar";
import Text from "@/components/atoms/Text";

export default function Navbar({ onMenuClick }) {
  // Simulación (luego backend)
  const user = {
    name: "Yonangell",
    role: "Admin",
  };

  return (
    // CAMBIO 1: bg-white para que el contenido respire, o mantén el oscuro si prefieres. 
    // Añadimos 'sticky top-0' para que el navbar siempre esté visible al hacer scroll.
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 shrink-0 sticky top-0 z-30">
      
      {/* Left: Hamburguesa + Título */}
      <div className="flex items-center gap-3">
        {/* BOTÓN HAMBURGUESA: Solo visible en móviles (md:hidden) */}
        <button 
          onClick={onMenuClick}
          className="p-2 -ml-2 text-slate-600 md:hidden hover:bg-slate-100 rounded-xl transition-colors"
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>

        <Text className="text-lg md:text-xl text-slate-900 font-bold tracking-tight">
          Gestión<span className="text-blue-600 font-black">P</span>
        </Text>
      </div>

      {/* Right: Info de Usuario */}
      <div className="flex items-center gap-2 md:gap-5">
        {/* En móvil ocultamos el nombre y el rol para ganar espacio */}
        <div className="hidden sm:block text-right">
          <Text className="text-sm font-bold text-slate-900 leading-none">{user.name}</Text>
          <Text className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{user.role}</Text>
        </div>

        <div className="flex items-center gap-3 pl-2 md:pl-5 border-l border-slate-100">
          <Avatar className="w-8 h-8 md:w-9 md:h-9 border-2 border-slate-100 shadow-sm" />
          
          <button className="hidden md:block text-xs font-bold text-red-500 hover:text-red-600 transition-colors">
            Cerrar sesión
          </button>
        </div>
      </div>
    </header>
  );
}