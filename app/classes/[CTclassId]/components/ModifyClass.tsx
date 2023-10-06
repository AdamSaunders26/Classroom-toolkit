import { Button } from "@/components/ui/button";
import AddPupilForm from "./AddPupilForm";

interface Props {
  setCurrentClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
  CTClassId: number;
}

export default function ModifyClass({ setCurrentClass, CTClassId }: Props) {
  //These will be buttons that perform crud operations on the database for the current class. Move update option to individual pupils view.
  return (
    <section className="border-4 border-purple-500 p-2">
      <AddPupilForm CTClassId={CTClassId} setCurrentClass={setCurrentClass} />
      {/* <p>Update Pupil</p> */}
      <p>Delete Pupil</p>
    </section>
  );
}
