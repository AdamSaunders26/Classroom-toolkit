import { Button } from "@/components/ui/button";

interface Props {
  pupil: Pupil;
  setCurrentPupil: React.Dispatch<React.SetStateAction<Pupil | null>>;
  currentPupil: Pupil | null;
}
export default function PupilListItem({
  pupil,
  setCurrentPupil,
  currentPupil,
}: Props) {
  let buttonClass =
    "  h-8 mr-2 w-full flex items-center justify-start hover:bg-ctblue-900 truncate ";
  currentPupil?.id === pupil.id
    ? (buttonClass +=
        " bg-ctblue text-white shadow-md hover:text-black hover:bg-ctblue-700")
    : (buttonClass += " bg-neutral-100 text-black");
  return (
    <li key={pupil.id} className="mr-2  ">
      <Button
        onClick={() => {
          setCurrentPupil(pupil);
        }}
        className={buttonClass}
      >
        <span className="mr-1">{pupil.id}.</span>
        <span className="truncate mr-1">{pupil.first_name}</span>{" "}
        <span>{pupil.last_name_initials}</span>
      </Button>
    </li>
  );
}
