import { CTClassContext } from "@/app/(app)/context/CTClassProvider";
import { deletePupil } from "@/app/(app)/fetchFunctions/fetchFunctions";
import { removeGuestPupil } from "@/app/(app)/utils/guestFunctions";
import { Button } from "@/components/ui/button";
import { useContext } from "react";

interface Props {
  currentPupil: Pupil | null;
  setCurrentClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
}

export default function RemovePupilButton({
  currentPupil,
  setCurrentClass,
}: Props) {
  const { currentTeacher } = useContext(CTClassContext);

  function clickHandler() {
    if (currentPupil) {
      if (currentTeacher?.id === "guest") {
        removeGuestPupil(currentPupil, setCurrentClass);
      } else {
        deletePupil(currentPupil.id).then((updatedClass) => {
          setCurrentClass(updatedClass);
        });
      }
    }
  }
  return (
    <Button
      className="w-full text-black col-start-1"
      variant="destructive"
      onClick={clickHandler}
    >
      Remove current pupil
    </Button>
  );
}
