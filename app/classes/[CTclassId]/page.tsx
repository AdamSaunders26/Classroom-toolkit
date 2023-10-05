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
  // const [currentPupilList, setCurrentPupilList] = useState<Pupil[] | null>(
  //   null
  // );
  // const [allClasses, setAllClasses] = useState<CTClass[] | null>(null);

  useEffect(() => {
    getSingleClass(params.CTclassId, setCurrentClass);
  }, []);

  return (
    <main className="border-4 col-span-4 grid grid-cols-5">
      <ClassList CTclass={currentClass} setCurrentPupil={setCurrentPupil} />
      <section className="col-span-4 border-4 border-green-500 grid grid-rows-2">
        <PupilDetails pupil={currentPupil} CTClass={currentClass} />
        <ModifyClass
          CTClassId={params.CTclassId}
          setCurrentClass={setCurrentClass}
        />
      </section>
    </main>
  );
}
