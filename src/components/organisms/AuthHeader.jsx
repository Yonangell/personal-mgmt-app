"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Text from "@/components/atoms/Text";

export default function AuthHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/60 backdrop-blur-xl border border-white/40 p-3 rounded-[2rem] shadow-xl shadow-dark/5">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-900 shadow-lg transition-all group-hover:bg-slate-800 group-hover:rotate-6">
            <span className="text-white font-black text-xl italic tracking-tighter uppercase">
              G
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-dark tracking-tighter leading-none">
              Gestión<span className="text-primary italic font-black">P</span>
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-6 pr-2">
          <Link href="/" className="group flex items-center gap-2">
            <span className="text-[10px] text-dark/40 group-hover:text-primary transition-colors">
              ←
            </span>
            <Text className="text-[10px] font-black text-dark opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all uppercase tracking-[0.2em]">
              Inicio
            </Text>
          </Link>

          <div className="h-4 w-[1px] bg-slate-200" />

          <div className="px-3 py-1 bg-primary/10 rounded-full">
            <p className="text-[9px] font-black text-primary uppercase tracking-widest italic">
              PRO ME v1.0
            </p>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
