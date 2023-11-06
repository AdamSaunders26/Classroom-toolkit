import { Dispatch, SetStateAction, useContext } from "react";
import PupilListItem from "./PupilListItem";
import { useSession } from "next-auth/react";
import { CTClassContext } from "@/app/(app)/context/CTClassProvider";

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
  const { data: session } = useSession();
  const { currentTeacher } = useContext(CTClassContext);

  let classList = CTclass?.pupils;
  console.log(classList);
  if (currentTeacher?.id === "guest") {
    classList = CTclass?.pupils.toSorted((a, b) => {
      const nameA = a.first_name.toUpperCase();
      var nameB = b.first_name.toUpperCase();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });
  }
  console.log(classList);

  if (CTclass?.pupils) {
    return (
      <section className=" p-2 px-4 flex flex-col ">
        <ul>
          <h2 className="text-2xl ">Name:</h2>
          <section className="overflow-auto max-h-[80vh] mt-4 scrollbar-thin scrollbar-thumb-ctblue scrollbar-thumb-rounded-md">
            {classList?.map((pupil, index) => {
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
    return <section className="p-4">Loading...</section>;
  }
}
