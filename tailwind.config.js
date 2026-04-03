/** @type {import('tailwindcss').Config} */

module.exports = {
  // 1. ACTIVAMOS EL MODO OSCURO POR CLASE
  darkMode: 'class', 
  
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        "primary-hover": "#1D4ED8",
        dark: "#1F2937",
        light: "#F3F4F6",
        success: "#10B981",
        error: "#EF4444",
        warning: "#F59E0B",

        darkBg: "#0B0F1A",      // Fondo total (Deep Space)
        darkCard: "#161B26",    // Fondo de tablas, notas y tareas
        darkBorder: "#242B38",  // Bordes sutiles para inputs y cards
      },
    },
  },
  plugins: [],
};