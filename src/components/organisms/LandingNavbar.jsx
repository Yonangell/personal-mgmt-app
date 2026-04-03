"use client";

import Link from "next/link";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";

export default function LandingNavbar() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-light shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 shadow-lg shadow-dark/20 transition-all group-hover:bg-slate-800 group-hover:rotate-6">
            <span className="text-white font-black text-xl italic tracking-tighter">
              G
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-dark tracking-tighter leading-none">
              Gestión<span className="text-primary italic">P</span>
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-none mt-1">
              PRO ME Technology
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {["Características", "Planes", "Preguntas"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`}>
              <Text className="text-xs font-black uppercase tracking-widest text-dark opacity-60 hover:opacity-100 hover:text-primary transition-all">
                {item}
              </Text>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-8">
          <Link href="/login">
            <Text className="text-sm font-black text-slate-600 hover:text-slate-800 transition-colors uppercase tracking-tight">
              Entrar
            </Text>
          </Link>

          <Link href="/register">
            <Button className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-tighter px-8 py-3 shadow-2xl shadow-dark/30 hover:bg-slate-800 hover:scale-105 transition-all border-none cursor-pointer">
              Pruébalo Gratis
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
