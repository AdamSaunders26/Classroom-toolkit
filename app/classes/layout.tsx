"use client";

import { useState } from "react";
import ClassesSidebar from "./components/ClassesSidebar";
import LoadingSpinner from "./components/LoadingSpinner";

export default function ClassesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <main className="grid grid-cols-5 h-full">
      <ClassesSidebar isLoading={isLoading} setIsLoading={setIsLoading} />
      {isLoading ? <LoadingSpinner /> : children}
    </main>
  );
}
