import Link from "next/link";

export default function LandingNavbar() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">
            Gestión<span className="text-blue-600">Personal</span>
          </span>
        </div>

        {/* LINKS DE NAVEGACIÓN (Escritorio) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#caracteristicas" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Características
          </Link>
          <Link href="#planes" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Planes
          </Link>
          <Link href="#faq" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Preguntas
          </Link>
        </nav>

        {/* BOTONES DE ACCIÓN */}
        <div className="flex items-center gap-3">
          <Link 
            href="/login" 
            className="text-sm font-bold text-slate-900 px-4 py-2 hover:bg-slate-50 rounded-lg transition-colors"
          >
            Iniciar Sesión
          </Link>
          <Link 
            href="/register" 
            className="bg-slate-900 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-slate-800 transition-all shadow-md active:scale-95"
          >
            Pruébalo Gratis
          </Link>
        </div>
      </div>
    </header>
  );
}