import { CTClassContext } from "@/app/(app)/context/CTClassProvider";
import { deletePupil } from "@/app/(app)/fetchFunctions/fetchFunctions";
import { removeGuestPupil } from "@/app/(app)/utils/guestFunctions";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Props {
  currentPupil: Pupil | null;
  setCurrentClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
}

export default function RemovePupilButton({
  currentPupil,
  setCurrentClass,
}: Props) {
  const { currentTeacher } = useContext(CTClassContext);

  function deleteCurrentPupil() {
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
  if (!currentPupil) {
    return null;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full text-black col-start-1" variant="destructive">
          Remove current pupil
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-4 border-ctblue">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {`
            This action cannot be undone. This will permanently delete ${
              currentPupil?.first_name
            } ${
              currentPupil?.last_name_initials
                ? currentPupil.last_name_initials
                : ""
            } and all associated records.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-ctyellow hover:bg-ctyellow-300">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={deleteCurrentPupil}
            className="bg-ctred-400 hover:bg-ctred-300"
          >
            Delete Pupil
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
