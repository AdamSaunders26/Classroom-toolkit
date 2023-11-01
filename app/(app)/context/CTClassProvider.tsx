"use client";
import { createContext, useContext, useState } from "react";
import { guestTeacher } from "../guestData";

interface ContextType {
  currentCTClass: CTClass | null;
  setCurrentCTClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
  allCTClasses: CTClass[] | null;
  setAllCTClasses: React.Dispatch<React.SetStateAction<CTClass[] | null>>;
  currentTeacher: Teacher | null;
  setCurrentTeacher: React.Dispatch<React.SetStateAction<Teacher | null>>;
}
export const CTClassContext = createContext<ContextType>({
  currentCTClass: null,
  setCurrentCTClass: () => null,
  allCTClasses: null,
  setAllCTClasses: () => null,
  currentTeacher: null,
  setCurrentTeacher: () => null,
});

export function CTClassProvider({ children }) {
  const [currentCTClass, setCurrentCTClass] = useState<CTClass | null>(null);
  const [allCTClasses, setAllCTClasses] = useState<CTClass[] | null>(null);
  const [currentTeacher, setCurrentTeacher] = useState<Teacher | null>(null);
  console.log(allCTClasses);
  console.log(currentCTClass);
  return (
    <CTClassContext.Provider
      value={{
        currentCTClass,
        setCurrentCTClass,
        allCTClasses,
        setAllCTClasses,
        currentTeacher,
        setCurrentTeacher,
      }}
    >
      {children}
    </CTClassContext.Provider>
  );
}
