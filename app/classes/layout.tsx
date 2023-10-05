"use client";

import ClassesSidebar from "./components/ClassesSidebar";
import { class1 } from "@/app/mock data/class1";
import { class2 } from "@/app/mock data/class2";
import { class3 } from "@/app/mock data/class3";
import { useEffect, useState } from "react";
import { getAllClasses } from "../(app)/fetchFunctions/fetchFunctions";
import { useSession } from "next-auth/react";

export default function ClassesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [allClasses, setAllClasses] = useState<CTClass[] | null>(null);
  // const { data: session } = useSession();

  // useEffect(() => {
  //   if (session?.user?.email)
  //     getAllClasses(session?.user?.email, setAllClasses);
  // }, [session?.user]);

  return (
    <main className="grid grid-cols-5 h-full">
      <ClassesSidebar />
      {children}
    </main>
  );
}
