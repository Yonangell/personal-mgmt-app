"use client";

import Card from "@/components/atoms/Card";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import { motion } from "framer-motion";

export default function NoteItem({ title, content }) {
  return (
    <motion.div whileHover={{ y: -5 }}>
      <Card className="group bg-white border-light hover:border-primary/20 rounded-[2.5rem] p-8 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <Text className="text-xl font-black italic tracking-tighter text-dark leading-tight">
              {title}
            </Text>
            <div className="w-2 h-2 rounded-full bg-primary/40 shrink-0 mt-2" />
          </div>

          <Text className="text-[11px] font-medium leading-relaxed text-dark/60">
            {content}
          </Text>
        </div>

        <div className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 flex gap-2 mt-8">
          <Button className="flex-1 bg-light/50 hover:bg-slate-900 hover:text-white text-dark/40 text-[10px] font-black uppercase italic py-3 rounded-2xl border-none transition-all active:bg-slate-900 active:text-white active:scale-95 cursor-pointer">
            ✎
          </Button>
          <Button className="px-4 bg-light/50 hover:bg-slate-900 text-dark/40 hover:text-white text-[10px] font-black uppercase py-3 rounded-2xl border-none transition-all hover:bg-error/10 hover:text-error active:bg-error active:bg-slate-900 active:text-white active:scale-95 cursor-pointer">
            ✕
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
