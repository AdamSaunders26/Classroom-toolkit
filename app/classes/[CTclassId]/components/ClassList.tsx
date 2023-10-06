import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import PupilListItem from "./PupilListItem";

interface Props {
  CTclass: CTClass | null;
  setCurrentPupil: Dispatch<SetStateAction<Pupil | null>>;
  currentPupil: Pupil | null;
}

export default function ClassList({
  CTclass,
  setCurrentPupil,
  currentPupil,
}: Props) {
  if (CTclass?.pupils) {
    return (
      <section className=" p-2 px-4 flex flex-col ">
        <ul>
          <h2 className="text-2xl ">Name:</h2>
          <section className="overflow-auto max-h-[80vh] mt-4 scrollbar-thin scrollbar-thumb-ctblue scrollbar-thumb-rounded-md">
            {CTclass.pupils.map((pupil, index) => {
              return (
                <PupilListItem
                  key={pupil.id}
                  pupil={pupil}
                  setCurrentPupil={setCurrentPupil}
                  currentPupil={currentPupil}
                  index={index}
                />
              );
            })}
          </section>
        </ul>
      </section>
    );
  } else {
    return (
      <section className="border-4 p-4 border-blue-500">
        Class not found
      </section>
    );
  }
}
