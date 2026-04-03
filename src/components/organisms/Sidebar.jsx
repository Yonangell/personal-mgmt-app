"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { user } from "@/lib/user";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

export default function Sidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname();
  const isAdminPath = pathname.startsWith("/admin");

  const adminLinks = [
    { name: "Master Dash", href: "/admin/dashboard", icon: "💎" },
    { name: "Usuarios", href: "/admin/users", icon: "👥" },
    { name: "Volver App", href: "/dashboard", icon: "⬅️" },
  ];

  const userLinks = [
    { name: "Panel", href: "/dashboard", icon: "📊" },
    { name: "Tareas", href: "/tasks", icon: "✅" },
    { name: "Notas", href: "/notes", icon: "📝" },
    { name: "Gastos", href: "/expenses", icon: "💰" },
    { name: "Perfil", href: "/profile", icon: "👤" },
  ];

  const links = isAdminPath ? adminLinks : userLinks;

  return (
    <>
      <aside
        className={`
          fixed inset-y-0 left-0 w-64 bg-blue-900 text-white p-5 flex flex-col z-50 
          transition-transform duration-300 ease-in-out border-r border-white/5
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 shadow-2xl shadow-black/50
        `}
      >
        <div className="flex items-center justify-between mb-10 mt-2">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-900 group-hover:bg-slate-800 shadow-lg shadow-primary/20 text-white transition-all group-hover:rotate-12">
              <span className="font-black text-xl italic tracking-tighter">
                G
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-white tracking-tighter leading-none">
                Gestión<span className="text-primary italic">P</span>
              </span>
              <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                PRO ME SYSTEM
              </span>
            </div>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {isAdminPath && (
          <div className="mb-6 px-4 py-2 bg-primary/20 rounded-xl border border-primary/30 animate-pulse">
            <Text className="text-[9px] font-black text-primary uppercase tracking-[0.3em] text-center">
              Control Maestro
            </Text>
          </div>
        )}

        <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 group ${
                  isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span
                  className={`text-lg transition-transform group-hover:scale-110 ${isActive ? "opacity-100" : "opacity-60"}`}
                >
                  {link.icon}
                </span>
                <span
                  className={`text-sm tracking-wide ${isActive ? "font-black" : "font-bold"}`}
                >
                  {link.name}
                </span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                )}
              </Link>
            );
          })}

          {/* LA LLAVE MAESTRA: Botón de Admin visible desde el modo Usuario */}
          {!isAdminPath && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 text-primary hover:from-primary hover:to-primary hover:text-white transition-all group"
              >
                <span className="text-lg group-hover:rotate-45 transition-transform">
                  ⚙️
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Panel Master
                </span>
              </Link>
            </div>
          )}
        </nav>

        <div className="mt-auto pt-6 border-t border-white/5">
          {!isAdminPath && (
            <div
              className={`p-4 rounded-2xl mb-4 flex flex-col items-center gap-2 ${user.plan === "pro" ? "bg-primary/10 border border-primary/20" : "bg-white/5"}`}
            >
              <Text className="text-[10px] font-black uppercase tracking-[0.2em] text-center opacity-60">
                {user.plan === "pro" ? "🚀 Nivel Pro" : "✨ Plan Básico"}
              </Text>
              {user.plan !== "pro" && (
                <Button className="w-full py-2 text-[10px] bg-primary/20 text-primary hover:bg-primary hover:text-white border-none shadow-none cursor-pointer">
                  Subir a Pro
                </Button>
              )}
            </div>
          )}
          <button className="flex items-center justify-center gap-3 w-full p-3 text-red-500/60 hover:text-red-600 hover:bg-red-400/85 rounded-2xl transition-all cursor-pointer">
            <span className="text-sm font-black uppercase tracking-tighter">
              Cerrar sesión
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}
