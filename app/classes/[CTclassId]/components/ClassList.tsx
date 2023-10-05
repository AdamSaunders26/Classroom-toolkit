import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface Props {
  CTclass: CTClass | null;
  setCurrentPupil: Dispatch<SetStateAction<Pupil | null>>;
}

export default function ClassList({ CTclass, setCurrentPupil }: Props) {
  if (CTclass?.pupils) {
    return (
      <section className=" p-4 ">
        <ul>
          <h2>Name:</h2>
          {CTclass.pupils.map((pupil) => (
            <li
              key={pupil.id}
              onClick={() => {
                setCurrentPupil(pupil);
              }}
            >{`${pupil.first_name} ${pupil.last_name_initials}`}</li>
          ))}
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
