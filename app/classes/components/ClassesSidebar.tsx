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
import { guestAllClasses } from "@/app/(app)/guestData";

export default function CTClassesSidebar() {
  const { data: session } = useSession();
  const {
    currentCTClass,
    setCurrentCTClass,
    allCTClasses,
    setAllCTClasses,
    currentTeacher,
    setCurrentTeacher,
  } = useContext(CTClassContext);
  useEffect(() => {
    if (session?.user?.email) {
      getAllClasses(session.user.email, setAllCTClasses);
    }
    if (currentTeacher?.id !== "guest") {
      getTeacher(session?.user?.email!).then((teacher) => {
        setCurrentTeacher(teacher);
      });
    }

    if (currentTeacher?.id === "guest" && !allCTClasses) {
      setAllCTClasses(guestAllClasses);
    }
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
