import AddClassForm from "./AddClassForm";
import { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  getAllClasses,
  getTeacher,
} from "@/app/(app)/fetchFunctions/fetchFunctions";
import RemoveClassButton from "./RemoveClassButton";
import ClassesList from "./ClassesList";
import { CTClassContext } from "@/app/(app)/context/CTClassProvider";

// interface Props {
//   CTClasses: CTClass[] | null;
// }

export default function CTClassesSidebar() {
  // const [allClasses, setAllClasses] = useState<CTClass[] | null>(null);
  // const [currentClass, setCurrentClass] = useState<CTClass | null>(null);
  const { data: session } = useSession();
  const {
    currentCTClass,
    setCurrentCTClass,
    allCTClasses,
    setAllCTClasses,
    setCurrentTeacher,
  } = useContext(CTClassContext);
  useEffect(() => {
    if (session?.user?.email)
      getAllClasses(session.user.email, setAllCTClasses);

    getTeacher(session?.user?.email!).then((teacher) => {
      setCurrentTeacher(teacher);
    });
  }, [session?.user, currentCTClass, setAllCTClasses]);

  return (
    <aside className="flex flex-col   bg-ctblue p-2 justify-between ">
      <section className=" flex flex-col max-h-[50vh] ">
        <h2 className="text-2xl px-2 text-ctyellow">Classes:</h2>
        <ClassesList
          allClasses={allCTClasses}
          setCurrentClass={setCurrentCTClass}
        />
      </section>
      <div className="flex flex-col gap-2">
        <AddClassForm setAllClasses={setAllCTClasses} />
        <RemoveClassButton
          currentClass={currentCTClass}
          setCurrentClass={setCurrentCTClass}
          setAllClasses={setAllCTClasses}
        />
      </div>
    </aside>
  );
}
