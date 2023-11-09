import { CTClassContext } from "@/app/(app)/context/CTClassProvider";
import { deletePupil } from "@/app/(app)/fetchFunctions/fetchFunctions";
import { removeGuestPupil } from "@/app/(app)/utils/guestFunctions";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
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
import CTLogo from "../../../icon.svg";
import LoadingSpinner from "../../components/LoadingSpinner";
import Image from "next/image";

interface Props {
  currentPupil: Pupil | null;
  setCurrentClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
}

export default function RemovePupilButton({
  currentPupil,
  setCurrentClass,
}: Props) {
  const { currentTeacher } = useContext(CTClassContext);
  const [open, setOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const alertMessage = `
  This action cannot be undone. This will permanently delete ${
    currentPupil?.first_name
  } ${
    currentPupil?.last_name_initials ? currentPupil.last_name_initials : ""
  } and all associated records.`;

  function deleteCurrentPupil() {
    if (currentPupil) {
      if (currentTeacher?.id === "guest") {
        removeGuestPupil(currentPupil, setCurrentClass);
      } else {
        deletePupil(currentPupil.id).then((updatedClass) => {
          setCurrentClass(updatedClass);
          setOpen(false);
          setIsDeleting(false);
        });
      }
    }
  }
  if (!currentPupil) {
    return null;
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className="w-full text-black col-start-1" variant="destructive">
          Remove current pupil
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-4 border-ctblue">
        <AlertDialogHeader>
          <AlertDialogTitle>
            {isDeleting ? "Deleting..." : "Are you sure?"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isDeleting ? (
              <div className="flex justify-center">
                <Image
                  priority
                  className="h-16 w-16 animate-spin-slow "
                  src={CTLogo}
                  alt="An image spinning to indicate something is loading"
                />
              </div>
            ) : (
              alertMessage
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-ctyellow hover:bg-ctyellow-300">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault();
              setIsDeleting(true);
              deleteCurrentPupil();
            }}
            className="bg-ctred-400 hover:bg-ctred-300"
          >
            Delete Pupil
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
