"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LandingNavbar from "@/components/organisms/LandingNavbar";
import PricingSection from "@/components/organisms/PricingSection";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

export default function Home() {
  return (
    <div className="bg-light/30 min-h-screen relative overflow-hidden selection:bg-primary/20">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -60, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-20 w-[25rem] h-[25rem] bg-dark/5 rounded-full blur-[100px]"
        />
      </div>

      <LandingNavbar />

      <section className="flex flex-col items-center justify-center pt-40 pb-24 gap-10 text-center px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-8xl font-black text-dark leading-[0.9] max-w-5xl tracking-tighter">
            Domina tu flujo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500 italic">
              Nivel Maestro
            </span>
          </h1>

          <Text className="mt-8 text-dark/60 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
            La plataforma de gestión definitiva para organizar tareas, notas y
            finanzas con el rigor del{" "}
            <span className="text-dark font-black italic">PRO ME</span>.
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-5"
        >
          <Link href="/login">
            <Button className="px-12 py-5 text-sm bg-slate-300 text-dark hover:text-slate-200 hover:bg-slate-400 shadow-2xl shadow-primary/20 border-none uppercase tracking-widest font-black cursor-pointer">
              Comenzar Ya
            </Button>
          </Link>

          <Link href="#planes">
            <Button className="px-12 py-5 text-sm bg-transparent border-2 border-dark/10 text-dark hover:border-dark uppercase tracking-widest font-black shadow-none cursor-pointer">
              Ver Planes
            </Button>
          </Link>
        </motion.div>
      </section>

      <motion.section
        id="planes"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-32 bg-white rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.05)] relative z-10"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tighter">
              Planes de Élite
            </h2>
            <Text className="text-dark/40 mt-4 text-lg font-bold italic">
              Desde el control personal hasta la automatización industrial.
            </Text>
          </div>

          <PricingSection />
        </div>
      </motion.section>

      <footer className="bg-white border-t border-light pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-dark/10">
                  <span className="text-white font-black text-xl italic uppercase">
                    G
                  </span>
                </div>
                <span className="text-2xl font-black text-dark tracking-tighter">
                  Gestión<span className="text-primary italic">P</span>
                </span>
              </div>
              <Text className="text-dark/30 text-[10px] font-black uppercase tracking-[0.2em]">
                Ingeniería en Productividad Personal
              </Text>
            </div>

            <div className="flex gap-10 text-[10px] font-black text-dark/40 uppercase tracking-widest">
              <Link
                href="#planes"
                className="hover:text-primary transition-all"
              >
                Planes
              </Link>
              <Link href="/login" className="hover:text-primary transition-all">
                Acceso
              </Link>
              <a
                href="mailto:soporte@prome.com"
                className="hover:text-primary transition-all"
              >
                Soporte
              </a>
            </div>

            <div className="flex gap-4">
              {[
                {
                  id: "fb",
                  label: "Facebook",
                  url: "https://www.facebook.com/yonangelljoseg",
                },
                {
                  id: "ig",
                  label: "Instagram",
                  url: "https://www.instagram.com/yonangell/",
                },
                {
                  id: "in",
                  label: "LinkedIn",
                  url: "https://www.linkedin.com/in/yonangell-guillen-038b41210/",
                },
              ].map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border-2 border-light rounded-2xl flex items-center justify-center text-dark/20 hover:text-primary hover:border-primary hover:rotate-6 hover:scale-110 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer group"
                  title={social.label}
                >
                  <span className="text-xs font-black italic uppercase tracking-tighter group-hover:scale-110 transition-transform">
                    {social.id}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-light flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-dark/20 text-[9px] font-black uppercase tracking-[0.3em]">
              © 2026 PRO ME SYSTEM —{" "}
              <span className="text-dark/60">ING. YONANGELL GUILLEN</span>
            </p>
            <div className="flex gap-8 text-[9px] font-black text-dark/20 uppercase tracking-[0.3em]">
              <span className="hover:text-dark cursor-pointer transition-colors">
                Privacidad
              </span>
              <span className="hover:text-dark cursor-pointer transition-colors">
                Términos
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
