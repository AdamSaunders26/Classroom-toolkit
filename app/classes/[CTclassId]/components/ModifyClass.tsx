import { Button } from "@/components/ui/button";
import AddPupilForm from "./AddPupilForm";
import RemovePupilButton from "./RemovePupilButton";

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
  //These will be buttons that perform crud operations on the database for the current class. Move update option to individual pupils view.
  return (
    <section className="flex flex-col gap-2 mx-4 ">
      <AddPupilForm CTClassId={CTClassId} setCurrentClass={setCurrentClass} />
      <RemovePupilButton
        currentPupil={currentPupil}
        setCurrentClass={setCurrentClass}
      />
    </section>
  );
}
