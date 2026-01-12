"use client";

import { useAula } from "@/contexts/AulaContext";

export function AulaSelector() {
  const { selectedAula, setSelectedAula } = useAula();

  return (
    <div className="flex gap-2">
      {["aula-1", "aula-2"].map((aula) => (
        <button
          key={aula}
          onClick={() => setSelectedAula(aula)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedAula === aula
              ? "bg-blue-600 text-white"
              : "bg-slate-700 text-slate-200 hover:bg-slate-600"
            }`}
        >
          {aula.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
