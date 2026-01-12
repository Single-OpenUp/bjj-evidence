"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AulaContextType {
  selectedAula: string;
  setSelectedAula: (aula: string) => void;
}

const AulaContext = createContext<AulaContextType | undefined>(undefined);

export function AulaProvider({ children }: { children: ReactNode }) {
  const [selectedAula, setSelectedAula] = useState("aula-1");

  return (
    <AulaContext.Provider value={{ selectedAula, setSelectedAula }}>
      {children}
    </AulaContext.Provider>
  );
}

export function useAula() {
  const context = useContext(AulaContext);
  if (!context) {
    throw new Error("useAula must be used within an AulaProvider");
  }
  return context;
}
