import Navbar from "@/components/organisms/Navbar";
import Sidebar from "@/components/organisms/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-light">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-slate-100 min-h-screen">{children}</main>
      </div>
    </div>
  );
}
