"use client";
import { useContext, useEffect, useState } from "react";
import ClassList from "./components/ClassList";
import ModifyClass from "./components/ModifyClass";
import PupilDetails from "./components/PupilDetails";
import { getSingleClass } from "@/app/(app)/fetchFunctions/fetchFunctions";
import { CTClassContext } from "@/app/(app)/context/CTClassProvider";
import { getSingleGuestClass } from "@/app/(app)/utils/guestFunctions";

interface Props {
  params: { CTclassId: number };
}

export default function CTClassPage({ params }: Props) {
  const { currentCTClass, setCurrentCTClass, currentTeacher, allCTClasses } =
    useContext(CTClassContext);
  const [currentPupil, setCurrentPupil] = useState<Pupil | null>(null);

  useEffect(() => {
    if (currentTeacher?.id === "guest" && allCTClasses) {
      getSingleGuestClass(allCTClasses, params);
    } else {
      getSingleClass(params.CTclassId, setCurrentCTClass);
    }
  }, [params.CTclassId, setCurrentCTClass]);

  if (currentTeacher?.id !== currentCTClass?.teacherId) {
    return (
      <main className="p-4 border-4 bg-ctblue text-white col-span-4 place-self-center rounded-md border-ctyellow">
        Current user is not authorised to view this section.
      </main>
    );
  }
  return (
    <main className=" col-span-4 grid grid-cols-5 ">
      <ClassList
        CTclass={currentCTClass}
        setCurrentPupil={setCurrentPupil}
        currentPupil={currentPupil}
      />
      <section className="col-span-4  grid grid-rows-2">
        <PupilDetails
          pupil={currentPupil}
          setCurrentPupil={setCurrentPupil}
          CTClass={currentCTClass}
          setCurrentClass={setCurrentCTClass}
        />
        <ModifyClass
          CTClassId={params.CTclassId}
          currentClass={currentCTClass}
          setCurrentClass={setCurrentCTClass}
          currentPupil={currentPupil}
        />
      </section>
    </main>
  );
}
