import { Button } from "@/components/ui/button";
import AddPupilForm from "./AddPupilForm";
import RemovePupilButton from "./RemovePupilButton";
import PastePupils from "./PastePupils";
import { useContext } from "react";
import { CTClassContext } from "@/app/(app)/context/CTClassProvider";

interface Props {
  currentClass: CTClass | null;
  setCurrentClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
  CTClassId: number;
  currentPupil: Pupil | null;
}

export default function ModifyClass({
  currentClass,
  setCurrentClass,
  CTClassId,
  currentPupil,
}: Props) {
  return (
    <section className="grid grid-cols-3 grid-rows-2 mx-4 gap-4">
      <AddPupilForm CTClassId={CTClassId} setCurrentClass={setCurrentClass} />
      <RemovePupilButton
        currentPupil={currentPupil}
        setCurrentClass={setCurrentClass}
      />

      <PastePupils
        CTClassId={CTClassId}
        currentClass={currentClass}
        setCurrentClass={setCurrentClass}
      />
    </section>
  );
}
