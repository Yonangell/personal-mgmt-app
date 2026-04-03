"use client";

import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import Text from "@/components/atoms/Text";
import Badge from "@/components/atoms/Badge";

const plans = [
  {
    name: "Gratis",
    price: "0",
    features: ["Hasta 50 tareas", "Notas básicas", "Soporte comunitario"],
    buttonText: "Comenzar Ya",
    isPopular: false,
  },
  {
    name: "Pro",
    price: "12",
    features: [
      "Tareas ilimitadas",
      "IA para Notas",
      "Gestión de Gastos",
      "Soporte 24/7",
    ],
    buttonText: "Pasar a Pro",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "49",
    features: [
      "Todo lo de Pro",
      "Múltiples usuarios",
      "Análisis avanzado",
      "API Personalizada",
    ],
    buttonText: "Contactar Ventas",
    isPopular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function PricingSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          whileHover={{ y: -10 }}
        >
          <Card
            className={`relative h-full flex flex-col p-8 rounded-[2.5rem] border-2 transition-all ${
              plan.isPopular
                ? "border-primary bg-white shadow-2xl shadow-primary/10"
                : "border-light bg-light/30 shadow-none"
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-white border-none px-4 py-1 shadow-lg shadow-primary/30">
                  MÁS POPULAR
                </Badge>
              </div>
            )}

            <Text className="text-xl font-black text-dark uppercase tracking-tight">
              {plan.name}
            </Text>

            <div className="mt-4 mb-6 flex items-baseline gap-1">
              <span className="text-5xl font-black text-dark tracking-tighter">
                ${plan.price}
              </span>
              <Text className="text-slate-400 font-bold text-sm">/mes</Text>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-primary font-bold text-lg">✓</span>
                  <Text className="text-sm font-medium opacity-80">
                    {feature}
                  </Text>
                </li>
              ))}
            </ul>

            <Button
              className={`w-full py-4 text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                plan.isPopular
                  ? "bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-primary/20 border-none"
                  : "bg-transparent border-2 border-dark/10 text-dark hover:border-dark"
              }`}
            >
              {plan.buttonText}
            </Button>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
