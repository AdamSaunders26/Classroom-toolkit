import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

interface Props {
  currentClass: CTClass;
}

export default function RemoveClassButton({ currentClass }: Props) {
  const { data: session } = useSession();
  return (
    <Button
      variant="destructive"
      className="text-black"
      onClick={() => {
        console.log(`Deleting ${currentClass.name}`);
      }}
    >
      Remove Class
    </Button>
  );
}
