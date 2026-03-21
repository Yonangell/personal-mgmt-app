import DashboardLayout from "@/layouts/DashboardLayout";
import Avatar from "@/components/atoms/Avatar";
import { user } from "@/lib/user"; // Tu simulación de usuario

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-3xl font-black text-slate-900 mb-8">Mi Perfil</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Columna Izquierda: Foto y Stats Rápidos */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="w-24 h-24 border-4 border-blue-50 shadow-inner" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">{user.name}</h2>
              <p className="text-sm text-slate-500 font-medium">{user.role}</p>
              <div className="mt-4 inline-block bg-blue-50 text-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                Plan {user.plan}
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl text-white shadow-xl shadow-slate-200">
              <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-4">Actividad</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-300">Tareas completadas</span>
                  <span className="font-bold">124</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-300">Racha actual</span>
                  <span className="font-bold">5 días</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario de Ajustes */}
          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-50 pb-4">Información Personal</h3>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 ml-1">NOMBRE COMPLETO</label>
                    <input type="text" defaultValue={user.name} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 ml-1">CORREO ELECTRÓNICO</label>
                    <input type="email" defaultValue="yonangell@ejemplo.com" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                  </div>
                </div>
                
                <button type="button" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all active:scale-95">
                  Guardar Cambios
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}