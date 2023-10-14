import { deleteClass } from "@/app/(app)/fetchFunctions/fetchFunctions";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

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
    }
  }
  return (
    <Button
      variant="destructive"
      className="text-black"
      onClick={deleteCurrentClass}
    >
      Remove Class
    </Button>
  );
}
