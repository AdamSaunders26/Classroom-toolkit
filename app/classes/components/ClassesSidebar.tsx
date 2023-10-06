import AddClassForm from "./AddClassForm";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getAllClasses } from "@/app/(app)/fetchFunctions/fetchFunctions";
import RemoveClassButton from "./RemoveClassButton";
import ClassesList from "./ClassesList";

interface Props {
  CTClasses: CTClass[] | null;
}

export default function CTClassesSidebar() {
  const [allClasses, setAllClasses] = useState<CTClass[] | null>(null);
  const [currentClass, setCurrentClass] = useState<CTClass | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.email)
      getAllClasses(session?.user?.email, setAllClasses);
  }, [session?.user]);

  return (
    <aside className="flex flex-col   bg-ctblue p-2 justify-between ">
      <section className=" flex flex-col max-h-[50vh] ">
        <h2 className="text-2xl px-2 text-ctyellow">Classes:</h2>
        <ClassesList
          allClasses={allClasses}
          setCurrentClass={setCurrentClass}
        />
      </section>
      <div className="flex flex-col gap-2">
        <AddClassForm setAllClasses={setAllClasses} />
        <RemoveClassButton
          currentClass={currentClass}
          setAllClasses={setAllClasses}
        />
      </div>
    </aside>
  );
}
