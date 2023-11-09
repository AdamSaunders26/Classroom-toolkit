import { deleteClass } from "@/app/(app)/fetchFunctions/fetchFunctions";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
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
import { useRouter } from "next/navigation";

interface Props {
  currentClass: CTClass | null;
  setCurrentClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
  setAllClasses: React.Dispatch<React.SetStateAction<CTClass[] | null>>;
}

export default function RemoveClassButton({
  currentClass,
  setCurrentClass,
  setAllClasses,
}: Props) {
  const { data: session } = useSession();
  const router = useRouter();
  function deleteCurrentClass() {
    if (currentClass) {
      deleteClass(currentClass?.id).then((deletedClass: CTClass) => {
        setCurrentClass(null);
        setAllClasses((curr) => {
          if (curr) {
            const updatedClassList = curr?.filter((CTclass) => {
              return CTclass.id !== deletedClass.id;
            });
            return updatedClassList;
          } else {
            return null;
          }
        });
      });
      router.push(process.env.NEXT_PUBLIC_HOME_URL + "/classes");
    }
  }

  if (!currentClass) {
    return null;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="text-black">
          Remove Class
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-4 border-ctblue">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {`
            This action cannot be undone. This will permanently delete ${currentClass?.name} class
            and all the students in it.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-ctyellow hover:bg-ctyellow-300">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={deleteCurrentClass}
            className="bg-ctred-400 hover:bg-ctred-300"
          >
            Delete Class
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
