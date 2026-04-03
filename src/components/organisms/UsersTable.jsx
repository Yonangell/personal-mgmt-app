"use client";
import { useState } from "react";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import SearchBar from "@/components/molecules/SearchBar"; // Importamos tu molécula

export default function UsersTable() {
  const [query, setQuery] = useState(""); // Estado para el buscador

  const users = [
    {
      id: 1,
      name: "Juan Perez",
      email: "juan@email.com",
      role: "Admin",
      plan: "Pro",
      status: "Active",
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria@email.com",
      role: "User",
      plan: "Basic",
      status: "Active",
    },
    {
      id: 3,
      name: "Carlos Ruiz",
      email: "carlos@email.com",
      role: "User",
      plan: "Pro",
      status: "Blocked",
    },
  ];

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="max-w-md">
        <SearchBar
          placeholder="BUSCAR USUARIO O EMAIL..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <Card className="bg-white border-none rounded-[2.5rem] p-4 md:p-8 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-3">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left">
                  <Text className="text-[10px] font-black uppercase tracking-[0.3em] text-dark/30">
                    Usuario
                  </Text>
                </th>
                <th className="px-6 py-4 text-left hidden md:table-cell">
                  <Text className="text-[10px] font-black uppercase tracking-[0.3em] text-dark/30">
                    Rol / Plan
                  </Text>
                </th>
                <th className="px-6 py-4 text-right">
                  <Text className="text-[10px] font-black uppercase tracking-[0.3em] text-dark/30">
                    Acciones
                  </Text>
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((u) => (
                  <tr
                    key={u.id}
                    className="group hover:scale-[1.01] transition-transform"
                  >
                    <td className="px-6 py-4 bg-slate-50 rounded-l-[1.5rem] md:rounded-l-[1.5rem] group-hover:bg-slate-100 transition-colors">
                      <div className="flex flex-col gap-2 md:gap-0">
                        <div className="flex flex-col">
                          <Text className="font-black italic text-dark uppercase text-sm tracking-tight truncate">
                            {u.name}
                          </Text>
                          <Text className="text-[10px] text-dark/40 font-bold truncate">
                            {u.email}
                          </Text>
                        </div>
                        <div className="flex gap-1.5 md:hidden mt-1">
                          <span className="px-2.5 py-1 rounded-full bg-dark text-dark/30 text-[7px] font-black uppercase tracking-tighter">
                            {u.role}
                          </span>
                          <span
                            className={`px-2.5 py-1 rounded-full text-[7px] font-black uppercase tracking-tighter ${
                              u.plan === "Enterprise"
                                ? "bg-indigo-600 text-dark/30"
                                : u.plan === "Pro"
                                  ? "bg-primary text-dark/30"
                                  : "bg-slate-200 text-slate-600"
                            }`}
                          >
                            {u.plan}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 bg-slate-50 hidden md:table-cell group-hover:bg-slate-100 transition-colors">
                      <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-dark text-dark/30 text-[8px] font-black uppercase tracking-tighter">
                          {u.role}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-tighter ${
                            u.plan === "Enterprise"
                              ? "bg-indigo-600 text-dark/30 shadow-md shadow-indigo-200"
                              : u.plan === "Pro"
                                ? "bg-primary text-dark/30 shadow-md shadow-primary/20"
                                : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {u.plan}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 bg-slate-50 rounded-r-[1.5rem] text-right group-hover:bg-slate-100 transition-colors">
                      <div className="flex gap-2 justify-end">
                        <Button className="px-3 py-1.5 md:px-4 md:py-2 bg-white hover:bg-dark hover:text-slate-900 text-slate-500 text-[8px] md:text-[9px] font-black italic rounded-xl border-none shadow-sm transition-all uppercase tracking-widest">
                          Edit
                        </Button>
                        <Button
                          className={`px-3 py-1.5 md:px-4 md:py-2 text-[8px] md:text-[9px] font-black italic rounded-xl border-none shadow-sm transition-all uppercase tracking-widest ${u.status === "Blocked" ? "bg-green-100 text-green-600" : "bg-red-50 text-red-600"}`}
                        >
                          {u.status === "Blocked" ? "Unlock" : "Block"}
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="py-20 text-center bg-slate-50 rounded-[1.5rem]"
                  >
                    <Text className="font-black italic text-dark/20 uppercase text-xs tracking-[0.5em]">
                      No se encontraron usuarios
                    </Text>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
