import Navbar from "@/components/organisms/Navbar";
import Sidebar from "@/components/organisms/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
