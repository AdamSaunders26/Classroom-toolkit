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
  let linkClass = " m-2 rounded-md text-black    w-full  p-2";
  CTclassId === id.toString()
    ? (linkClass += " bg-ctyellow hover:bg-ctyellow shadow-xl")
    : (linkClass += " bg-white  hover:bg-neutral-200 shadow-md");

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
        <div className="">
          {name} - {CTClass?.pupils?.length} pupils
        </div>
        <div className="text-neutral-700">
          {yearGroup === "EYFS" ? "EYFS" : `Year ${yearGroup}`}
        </div>
      </Link>
    </Button>
  );
}
