"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LandingNavbar from "@/components/organisms/LandingNavbar";
import PricingSection from "@/components/organisms/PricingSection";

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -40, 0],
            y: [0, -60, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-40"
        />
      </div>
      <LandingNavbar />
      <section className="flex flex-col items-center justify-center pt-32 pb-20 gap-8 text-center px-4 relative">
        {/* Título con Fade In y Slide Up */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight max-w-4xl"
        >
          Lleva tu Productividad al <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Siguiente Nivel
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          La plataforma de gestión definitiva para organizar tus tareas, notas y
          finanzas con el toque maestro del{" "}
          <span className="font-bold text-slate-800">ME</span>.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/login"
              className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all block"
            >
              Comenzar Gratis
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#planes"
              className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-4 rounded-2xl font-bold hover:border-slate-900 transition-all block"
            >
              Ver Planes
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <motion.section
        id="planes"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-white rounded-t-[3rem] shadow-2xl relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">
              Planes para cada necesidad
            </h2>
            <p className="text-slate-500 mt-4 text-lg">
              Desde uso personal hasta gestión profesional avanzada.
            </p>
          </div>

          <PricingSection />
        </div>
      </motion.section>
      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-sm">
                  G
                </div>
                <span className="text-xl font-bold text-slate-900 tracking-tight">
                  Gestión<span className="text-blue-600">P</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm font-medium">
                Potenciando tu flujo de trabajo diario.
              </p>
            </div>
            <div className="flex gap-8 text-sm font-bold text-slate-500">
              <Link
                href="#planes"
                className="hover:text-blue-600 transition-colors"
              >
                Planes
              </Link>
              <Link
                href="/login"
                className="hover:text-blue-600 transition-colors"
              >
                Acceso
              </Link>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Soporte
              </a>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-all cursor-pointer">
                <a
                  href="https://www.facebook.com/yonangelljoseg"
                  target="_blank"
                >
                  <span className="text-xs">fb</span>
                </a>
              </div>
              <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-all cursor-pointer">
                <a href="https://www.instagram.com/yonangell/" target="_blank">
                  <span className="text-xs">ig</span>
                </a>
              </div>
              <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-all cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/yonangell-guillen-038b41210/?skipRedirect=true"
                  target="_blank"
                >
                  <span className="text-xs">in</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-[11px] font-medium uppercase tracking-widest">
              © 2026 Gestión Personal —{" "}
              <span className="text-slate-900">Ing. Yonangell Guillen.</span>
            </p>
            <div className="flex gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              <span className="hover:text-slate-600 cursor-pointer transition-colors">
                Privacidad
              </span>
              <span className="hover:text-slate-600 cursor-pointer transition-colors">
                Términos
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
