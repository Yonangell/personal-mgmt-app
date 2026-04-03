"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AuthHeader from "@/components/organisms/AuthHeader";
import LoginForm from "@/components/organisms/LoginForm";

import Card from "@/components/atoms/Card";
import Text from "@/components/atoms/Text";
import Badge from "@/components/atoms/Badge";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 pt-32 relative overflow-hidden">
      <AuthHeader />

      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-200 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8 space-y-3">
          <div className="flex justify-center">
            <Badge className="bg-primary/10 text-primary border-none font-black italic uppercase tracking-widest text-[10px] px-4">
              Acceso Seguro
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-dark tracking-tighter italic uppercase">
            ¡Bienvenido!
          </h1>
          <Text className="font-bold opacity-30 uppercase tracking-[0.3em] text-[10px]">
            Ingresa al panel de control del mejor equipo
          </Text>
        </div>

        <Card className="bg-white/80 backdrop-blur-2xl rounded-[3rem] shadow-2xl shadow-dark/5 p-10 md:p-12 border-white relative overflow-hidden">
          <LoginForm />

          <div className="mt-10 text-center border-t border-gray-100 pt-8">
            <Text className="text-[11px] font-bold uppercase tracking-widest text-dark/40">
              ¿No tienes cuenta?{" "}
              <Link
                href="/register"
                className="text-primary font-black hover:underline italic ml-1"
              >
                Regístrate gratis
              </Link>
            </Text>
          </div>
        </Card>

        <div className="text-center mt-12 opacity-40">
          <span className="text-5xl font-black italic tracking-tighter text-black">
            PRO ME
          </span>
        </div>
      </motion.div>
    </main>
  );
}
