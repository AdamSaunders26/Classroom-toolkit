"use client";
import { createContext, useContext, useState } from "react";

interface ContextType {
  currentCTClass: CTClass | null;
  setCurrentCTClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
}
export const CTClassContext = createContext<ContextType>({
  currentCTClass: null,
  setCurrentCTClass: () => null,
});

export function CurrentCTClassProvider({ children }) {
  const [currentCTClass, setCurrentCTClass] = useState<CTClass | null>(null);
  return (
    <CTClassContext.Provider value={{ currentCTClass, setCurrentCTClass }}>
      {children}
    </CTClassContext.Provider>
  );
}
