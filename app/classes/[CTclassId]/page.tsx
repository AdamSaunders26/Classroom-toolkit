"use client";
import { useContext, useEffect, useState } from "react";
import ClassList from "./components/ClassList";
import ModifyClass from "./components/ModifyClass";
import PupilDetails from "./components/PupilDetails";
import { getSingleClass } from "@/app/(app)/fetchFunctions/fetchFunctions";
import { CTClassContext } from "@/app/(app)/context/CTClassProvider";

interface Props {
  params: { CTclassId: number };
}

export default function CTClassPage({ params }: Props) {
  const { currentCTClass, setCurrentCTClass } = useContext(CTClassContext);
  const [currentPupil, setCurrentPupil] = useState<Pupil | null>(null);

  useEffect(() => {
    getSingleClass(params.CTclassId, setCurrentCTClass);
  }, [params.CTclassId, setCurrentCTClass]);

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
