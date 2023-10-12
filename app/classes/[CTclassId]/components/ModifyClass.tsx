import { Button } from "@/components/ui/button";
import AddPupilForm from "./AddPupilForm";
import RemovePupilButton from "./RemovePupilButton";
import PastePupils from "./PastePupils";

interface Props {
  setCurrentClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
  CTClassId: number;
  currentPupil: Pupil | null;
}

export default function ModifyClass({
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

      <PastePupils CTClassId={CTClassId} setCurrentClass={setCurrentClass} />
    </section>
  );
}
