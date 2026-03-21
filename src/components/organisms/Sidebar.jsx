"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { user } from "@/lib/user";

export default function Sidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname();

  const links = [
    { name: "Panel", href: "/dashboard", icon: "📊" },
    { name: "Tareas", href: "/tasks", icon: "✅" },
    { name: "Notas", href: "/notes", icon: "📝" },
    { name: "Gastos", href: "/expenses", icon: "💰" },
    { name: "Perfil", href: "/profile", icon: "👤" },
  ];

  const isAdmin = user.role === "admin";

  return (
    <>
      <aside className={`
        fixed inset-y-0 left-0 w-64 bg-slate-900 text-white p-4 flex flex-col z-50 
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 border-r border-slate-800
      `}>
        
        {/* Header del Sidebar con botón de cerrar para móvil */}
        <div className="flex items-center justify-between mb-8 mt-2 px-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">G</div>
            <h2 className="text-xl font-bold tracking-tight">Gestión<span className="text-blue-400">P</span></h2>
          </div>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        
        {/* Navegación */}
        <nav className="flex flex-col gap-1.5 flex-1 overflow-y-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)} // Cerramos el menú al hacer click en móvil
              className={`flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                pathname === link.href 
                  ? "bg-blue-600 text-white" 
                  : "text-slate-400 hover:bg-slate-800"
              }`}
            >
              <span>{link.icon}</span>
              <span className="font-medium text-sm">{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* FOOTER DEL SIDEBAR: Aquí ponemos el Cerrar Sesión para móvil */}
        <div className="mt-auto pt-4 border-t border-slate-800">
          <button className="flex items-center gap-3 w-full p-2.5 text-red-400 hover:bg-red-500/10 rounded-xl transition-all md:hidden">
            <span>🚪</span>
            <span className="text-sm font-bold">Cerrar sesión</span>
          </button>
          
          <p className="text-[10px] text-center text-slate-500 mt-2">
            {user.plan === "pro" ? "🚀 Pro Account" : "✨ Free Account"}
          </p>
        </div>
      </aside>
    </>
  );
}