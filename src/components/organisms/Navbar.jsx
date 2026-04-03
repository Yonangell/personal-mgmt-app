"use client";

import Text from "@/components/atoms/Text";

export default function Navbar({ onMenuClick }) {
  // Simulación de datos
  const user = {
    name: "Yonangell",
    role: "Admin",
  };

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-light flex items-center justify-between px-6 md:px-10 shrink-0 sticky top-0 z-30 shadow-sm shadow-dark/5">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2.5 -ml-2 text-dark md:hidden hover:bg-light rounded-2xl transition-all active:scale-95 cursor-pointer"
          aria-label="Abrir menú"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>

        <div className="flex flex-col md:hidden">
          <Text className="text-lg font-black text-dark tracking-tighter leading-none">
            Gestión<span className="text-primary italic font-black">P</span>
          </Text>
        </div>

        <div className="hidden md:block">
          <Text className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
            Panel /{" "}
            <span className="opacity-100 text-dark">Resumen General</span>
          </Text>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <div className="hidden sm:flex flex-col items-end">
          <Text className="text-sm font-black text-dark leading-none tracking-tighter italic">
            {user.name}
          </Text>
          <div className="mt-1.5">
            <span className="text-[8px] font-black bg-dark text-neutral-700 px-2 py-0.5 rounded-md uppercase tracking-[0.2em] italic shadow-lg shadow-dark/10">
              {user.role}
            </span>
          </div>
        </div>

        <div className="h-8 w-[1px] bg-light mx-1 hidden sm:block opacity-50" />

        <div className="relative group cursor-pointer pr-2">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-dark to-slate-700 p-[2px] shadow-xl shadow-dark/5 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-primary/20">
            <div className="w-full h-full rounded-[10px] bg-white overflow-hidden flex items-center justify-center">
              <span className="text-dark font-black text-sm italic uppercase tracking-tighter transition-colors group-hover:text-primary">
                {user.name.charAt(0)}
              </span>
            </div>
          </div>

          <div className="absolute -bottom-1 -right-0 w-4 h-4 bg-success border-2 border-white rounded-lg rotate-12 shadow-md"></div>
        </div>
      </div>
    </header>
  );
}
