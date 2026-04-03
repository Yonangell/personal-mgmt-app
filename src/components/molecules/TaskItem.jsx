"use client";

import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import Card from "@/components/atoms/Card";
import { motion } from "framer-motion";

export default function TaskItem({ title, status }) {
  const isCompleted = status === "Completado";

  return (
    <motion.div whileHover={{ x: 5 }} className="w-full">
      <Card className="group bg-white border-light hover:border-primary/30 rounded-[2.5rem] p-5 md:p-6 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div
              className={`shrink-0 w-6 h-6 mt-1 rounded-lg border-2 flex items-center justify-center transition-all cursor-pointer ${isCompleted ? "bg-success border-success" : "border-light group-hover:border-primary"}`}
            >
              {isCompleted && <span className="text-white text-[10px]">✓</span>}
            </div>

            <div className="flex flex-col min-w-0 overflow-hidden">
              <Text
                className={`font-black italic tracking-tighter text-sm md:text-base leading-tight truncate ${isCompleted ? "text-dark/20 line-through" : "text-dark"}`}
              >
                {title}
              </Text>
              <Text className="text-[9px] font-black uppercase tracking-[0.2em] text-dark/30 mt-1">
                Prioridad Media • 2h restante
              </Text>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 border-t sm:border-none pt-3 sm:pt-0">
            <Badge
              className={`${isCompleted ? "bg-success/10 text-success" : "bg-primary/10 text-primary"} border-none font-black italic uppercase text-[8px] md:text-[9px] px-3 py-1 shrink-0`}
            >
              {status}
            </Badge>

            <div className="flex gap-2 shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300">
              <Button className="p-2 bg-light/50 text-dark/40 hover:bg-slate-900 hover:text-white rounded-xl border-none text-[10px] transition-all active:bg-slate-900 active:text-white active:scale-95 cursor-pointer">
                ✎
              </Button>
              <Button className="p-2 bg-light/50 hover:bg-slate-900 text-dark/40 hover:bg-error hover:text-white rounded-xl border-none text-[10px] transition-all hover:bg-error/10 hover:text-error active:bg-error active:bg-slate-900 active:text-white active:scale-95 cursor-pointer">
                ✕
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
