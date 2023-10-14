"use client";
import { createContext, useContext, useState } from "react";

interface ContextType {
  currentCTClass: CTClass | null;
  setCurrentCTClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
  allCTClasses: CTClass[] | null;
  setAllCTClasses: React.Dispatch<React.SetStateAction<CTClass[] | null>>;
}
export const CTClassContext = createContext<ContextType>({
  currentCTClass: null,
  setCurrentCTClass: () => null,
  allCTClasses: null,
  setAllCTClasses: () => null,
});

export function CTClassProvider({ children }) {
  const [currentCTClass, setCurrentCTClass] = useState<CTClass | null>(null);
  const [allCTClasses, setAllCTClasses] = useState<CTClass[] | null>(null);
  return (
    <CTClassContext.Provider
      value={{
        currentCTClass,
        setCurrentCTClass,
        allCTClasses,
        setAllCTClasses,
      }}
    >
      {children}
    </CTClassContext.Provider>
  );
}
