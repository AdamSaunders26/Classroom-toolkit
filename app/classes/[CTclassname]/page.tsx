"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ClassList from "./components/ClassList";
import ModifyClass from "./components/ModifyClass";
import PupilDetails from "./components/PupilDetails";
import { class1 } from "@/app/mock data/class1";
import { class2 } from "@/app/mock data/class2";
import { class3 } from "@/app/mock data/class3";

interface Props {
  params: { CTclassname: string };
}

export default function CTClassPage({ params }: Props) {
  const allClasses = [class1, class2, class3]; //this will be a single get requst from API for the specific class
  const [currentCTClass, setCurrentCTClass] = useState<CTClass>({
    name: null,
    pupils: null,
  });
  const [currentPupil, setCurrentPupil] = useState<Pupil | null>(null);

  useEffect(() => {
    async function fetchData(
      setState?: Dispatch<SetStateAction<CTClass | null>>
    ) {
      const newClass = await fetch("http://localhost:3000/api/classes");
      const parsedClass = await newClass.json();

      setCurrentCTClass((curr) => {
        return { name: params.CTclassname, pupils: parsedClass };
      });
    }

    fetchData();
  }, []);
  console.log(currentCTClass);

  return (
    <main className="border-4 col-span-4 grid grid-cols-5">
      <ClassList CTclass={currentCTClass} setCurrentPupil={setCurrentPupil} />
      <section className="col-span-4 border-4 border-green-500 grid grid-rows-2">
        <PupilDetails pupil={currentPupil} />
        <ModifyClass />
      </section>
    </main>
  );
}
