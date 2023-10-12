"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ClassList from "./components/ClassList";
import ModifyClass from "./components/ModifyClass";
import PupilDetails from "./components/PupilDetails";
import {
  getAllClasses,
  getSingleClass,
} from "@/app/(app)/fetchFunctions/fetchFunctions";

interface Props {
  params: { CTclassId: number };
}

export default function CTClassPage({ params }: Props) {
  const [currentClass, setCurrentClass] = useState<CTClass | null>(null);
  const [currentPupil, setCurrentPupil] = useState<Pupil | null>(null);

  useEffect(() => {
    getSingleClass(params.CTclassId, setCurrentClass);
  }, [params.CTclassId]);

  return (
    <main className=" col-span-4 grid grid-cols-5 ">
      <ClassList
        CTclass={currentClass}
        setCurrentPupil={setCurrentPupil}
        currentPupil={currentPupil}
      />
      <section className="col-span-4  grid grid-rows-2">
        <PupilDetails
          pupil={currentPupil}
          CTClass={currentClass}
          setCurrentClass={setCurrentClass}
        />
        <ModifyClass
          CTClassId={params.CTclassId}
          setCurrentClass={setCurrentClass}
          currentPupil={currentPupil}
        />
      </section>
    </main>
  );
}
