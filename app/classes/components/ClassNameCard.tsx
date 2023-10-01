import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Props {
  CTClass: CTClass;
  setCurrentClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
}

export default function ClassNameCard({ CTClass, setCurrentClass }: Props) {
  const { CTclassId } = useParams();

  const { id, name, yearGroup } = CTClass;
  let linkClass =
    " m-2 rounded-md text-black  border-2 border-ctyellow-300  w-full  p-2";
  CTclassId === id.toString()
    ? (linkClass += " bg-white border-ctyellow hover:bg-white shadow-xl")
    : (linkClass +=
        " bg-ctyellow border-ctyellow-300 hover:bg-ctyellow-400 shadow-md");

  return (
    <Button
      asChild
      className={linkClass}
      onClick={() => {
        setCurrentClass(CTClass);
      }}
    >
      <Link
        className="w-full flex justify-between px-2 "
        key={id}
        href={`/classes/${id}`}
      >
        <div className="">{name}</div>
        <div className="text-neutral-600">{yearGroup}</div>
      </Link>
    </Button>
  );
}
