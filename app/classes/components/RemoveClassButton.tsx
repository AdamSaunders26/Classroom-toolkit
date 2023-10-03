import { deleteClass } from "@/app/(app)/fetchFunctions/getFunctions";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

interface Props {
  currentClass: CTClass | null;
  setAllClasses: React.Dispatch<React.SetStateAction<CTClass[] | null>>;
}

export default function RemoveClassButton({
  currentClass,
  setAllClasses,
}: Props) {
  const { data: session } = useSession();
  return (
    <Button
      variant="destructive"
      className="text-black"
      onClick={() => {
        if (currentClass) {
          deleteClass(currentClass?.id).then((deletedClassId) => {
            setAllClasses((curr) => {
              console.log(curr);
              if (curr) {
                const updatedClassList = curr?.filter((CTclass) => {
                  return CTclass.id !== deletedClassId;
                });
                return updatedClassList;
              } else {
                return null;
              }
            });
          });
        }
      }}
    >
      Remove Class
    </Button>
  );
}
