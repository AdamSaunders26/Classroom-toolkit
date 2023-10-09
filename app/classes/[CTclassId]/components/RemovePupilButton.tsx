import { deletePupil } from "@/app/(app)/fetchFunctions/fetchFunctions";
import { Button } from "@/components/ui/button";

interface Props {
  currentPupil: Pupil | null;
  setCurrentClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
}

export default function RemovePupilButton({
  currentPupil,
  setCurrentClass,
}: Props) {
  return (
    <Button
      className="w-full text-black col-start-1"
      variant="destructive"
      onClick={() => {
        if (currentPupil) {
          deletePupil(currentPupil.id).then((updatedClass) => {
            setCurrentClass(updatedClass);
          });
        }
      }}
    >
      Remove current pupil
    </Button>
  );
}
