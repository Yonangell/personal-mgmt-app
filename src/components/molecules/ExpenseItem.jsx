"use client";

import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import Card from "@/components/atoms/Card";
import { motion } from "framer-motion";

export default function ExpenseItem({ title, amount, category }) {
  return (
    <motion.div whileHover={{ y: -3 }} className="w-full">
      <Card className="group bg-white border-light hover:border-error/20 rounded-[2.5rem] p-5 md:p-7 transition-all shadow-sm hover:shadow-xl hover:shadow-error/5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-5 flex-1 min-w-0">
            <div className="shrink-0 w-12 h-12 rounded-[1.2rem] bg-error/5 border border-error/10 flex items-center justify-center transition-all duration-300 group-hover:bg-error group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-error/20">
              <span className="text-xl font-black italic text-error transition-colors duration-300 group-hover:text-green-400">
                $
              </span>
            </div>

            <div className="flex flex-col min-w-0 overflow-hidden">
              <Text className="font-black italic tracking-tighter text-sm md:text-base leading-tight truncate text-dark">
                {title}
              </Text>
              <Text className="text-[9px] font-black uppercase tracking-[0.2em] text-dark/30 mt-1">
                Registro de Salida • Hoy
              </Text>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-none pt-4 sm:pt-0">
            <div className="flex flex-col items-end">
              <Text className="text-xl font-black italic tracking-tighter text-error">
                -${amount}
              </Text>
              <Badge className="bg-slate-100 text-dark/40 border-none font-black italic uppercase text-[8px] px-2 py-0.5 mt-1">
                {category}
              </Badge>
            </div>

            <div className="flex gap-2 shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300">
              <Button className="p-2.5 bg-light/50 hover:bg-slate-900 text-dark/40 hover:text-white rounded-xl border-none text-[10px] transition-all active:bg-slate-900 active:text-white active:scale-95 cursor-pointer">
                ✎
              </Button>
              <Button className="p-2.5 bg-light/50 text-dark/40 hover:bg-slate-900 hover:bg-error hover:text-white rounded-xl border-none text-[10px] transition-all active:bg-error active:bg-slate-900 active:text-white active:scale-95 cursor-pointer">
                ✕
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
