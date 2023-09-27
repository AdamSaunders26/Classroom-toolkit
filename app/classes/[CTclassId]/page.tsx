"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ClassList from "./components/ClassList";
import ModifyClass from "./components/ModifyClass";
import PupilDetails from "./components/PupilDetails";
import {
  getAllClasses,
  getSingleClass,
} from "@/app/(app)/fetchFunctions/getFunctions";

interface Props {
  params: { CTclassname: string };
}

export default function CTClassPage({ params }: Props) {
  const [currentCTClass, setCurrentCTClass] = useState<CTClass | null>(null);
  const [currentPupil, setCurrentPupil] = useState<Pupil | null>(null);
  const [allClasses, setAllClasses] = useState<CTClass[] | null>(null);

  // useEffect(() => {
  //   getAllClasses(setAllClasses).then((CTClasses) => {
  //     CTClasses.forEach((CTClass) => {
  //       CTClass.name?.toLowerCase() === params.CTclassname
  //         ? getSingleClass(params.CTclassname, setCurrentCTClass, CTClass.id)
  //         : null;
  //     });
  //   });
  // }, []);

  return (
    <main className="border-4 col-span-4 grid grid-cols-5">
      <ClassList CTclass={currentCTClass} setCurrentPupil={setCurrentPupil} />
      <section className="col-span-4 border-4 border-green-500 grid grid-rows-2">
        <PupilDetails pupil={currentPupil} CTClass={currentCTClass} />
        <ModifyClass />
      </section>
    </main>
  );
}
