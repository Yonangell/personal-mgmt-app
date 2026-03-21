"use client";

import { motion } from "framer-motion";

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
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
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
          variants={cardVariants}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          className={`relative p-8 rounded-3xl border-2 flex flex-col ${
            plan.isPopular
              ? "border-blue-600 bg-white shadow-2xl shadow-blue-100"
              : "border-slate-100 bg-slate-50/50"
          }`}
        >
          {plan.isPopular && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
              Más Popular
            </span>
          )}

          <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-black text-slate-900">
              ${plan.price}
            </span>
            <span className="text-slate-500 text-sm">/mes</span>
          </div>

          <ul className="space-y-4 mb-8 flex-1">
            {plan.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-sm text-slate-600"
              >
                <span className="text-blue-500 font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <button
            className={`w-full py-4 rounded-2xl font-bold transition-all ${
              plan.isPopular
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200"
                : "bg-white border-2 border-slate-200 text-slate-900 hover:border-slate-900"
            }`}
          >
            {plan.buttonText}
          </button>
        </motion.div>
      ))}
    </motion.div>
  );
}
