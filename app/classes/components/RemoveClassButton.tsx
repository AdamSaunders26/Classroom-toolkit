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
import React, { useState } from "react";
import Image from "next/image";
import CTLogo from "../../icon.svg";
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const alertMessage = `
This action cannot be undone. This will permanently delete ${currentClass?.name} class
and all the students in it.`;

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
        setIsDeleting(false);
        toast({ title: "Class deleted successfully" });
      });
      router.push(process.env.NEXT_PUBLIC_HOME_URL + "/classes");
    }
  }

  if (!currentClass) {
    return null;
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="text-black">
          Remove Class
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-4 border-ctblue">
        <AlertDialogHeader>
          <AlertDialogTitle>
            {isDeleting ? "Deleting..." : "Are you sure?"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isDeleting ? (
              <span className="flex justify-center">
                <Image
                  priority
                  className="h-16 w-16 animate-spin-slow "
                  src={CTLogo}
                  alt="An image spinning to indicate something is loading"
                />
              </span>
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
              deleteCurrentClass();
            }}
            className="bg-ctred-400 hover:bg-ctred-300"
          >
            Delete Class
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
