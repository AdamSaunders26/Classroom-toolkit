import { Button } from "@/components/ui/button";

interface Props {
  updatingPupils: boolean;
  setUpdatingPupils: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UpdatePupilButton({
  updatingPupils,
  setUpdatingPupils,
}: Props) {
  let buttonClass = "";
  updatingPupils
    ? (buttonClass += "bg-ctred-400 hover:bg-ctred-500")
    : (buttonClass += "bg-ctyellow hover:bg-ctyellow-400");
  return (
    <Button
      variant="secondary"
      onClick={() => {
        setUpdatingPupils((curr) => !curr);
      }}
      className={buttonClass}
    >
      {updatingPupils ? "Cancel" : "Update Details"}
    </Button>
  );
}
