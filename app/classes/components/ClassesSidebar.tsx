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

interface Props {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CTClassesSidebar({ isLoading, setIsLoading }: Props) {
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
    setCurrentCTClass(null);
  }, []);

  useEffect(() => {
    if (session?.user?.email) {
      getAllClasses(session.user.email, setAllCTClasses);
      setIsLoading(false);
    }
    if (currentTeacher?.id !== "guest") {
      getTeacher(session?.user?.email!).then((teacher) => {
        setCurrentTeacher(teacher);
      });
    }

    if (currentTeacher?.id === "guest" && !allCTClasses) {
      setAllCTClasses(guestAllClasses);
      setIsLoading(false);
    }
  }, [session?.user, currentCTClass, setAllCTClasses]);

  return (
    <aside className="flex flex-col   bg-ctblue p-2 justify-between ">
      <section className=" flex flex-col max-h-[50vh] ">
        <h2 className="text-2xl px-2 text-ctyellow">Classes:</h2>
        <ClassesList
          allClasses={allCTClasses}
          setCurrentClass={setCurrentCTClass}
          isLoading={isLoading}
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
